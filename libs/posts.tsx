import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
  console.log('postsDirectory');
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName: string) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section

    const matterResult = matter(fileContents);
    //取得 matterResult的 data 字串 的 data: "title:'Pre123' date:'2023-04-04'", 的title 和 date
    // console.log(matterResult.data);
    const dataObject = Object.fromEntries(
      matterResult.data
        .split(' ')
        .map((item: string) => item.split(':'))
        .map(([key, value]: [string, string]) => [
          key.replace("'", ''),
          value.slice(1, -1),
        ]),
    );
    // 合併解析後的物件與其他欄位，生成最終結果
    const resultObject = {
      title: dataObject.title,
      date: dataObject.date,
      content: matterResult.content,
    };
    const blogPost: BlogPost = {
      id,
      title: resultObject.title,
      date: resultObject.date,
      content: resultObject.content,
    };

    // Combine the data with the id
    return blogPost;
  });
  // console.log(allPostsData);
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  //取得 matterResult的 data 字串 的 data: "title:'Pre123' date:'2023-04-04'", 的title 和 date
  // console.log(matterResult.data);
  const dataObject = Object.fromEntries(
    matterResult.data
      .split(' ')
      .map((item: string) => item.split(':'))
      .map(([key, value]: [string, string]) => [
        key.replace("'", ''),
        value.slice(1, -1),
      ]),
  );
  // 合併解析後的物件與其他欄位，生成最終結果
  const resultObject = {
    title: dataObject.title,
    date: dataObject.date,
    content: matterResult.content,
  };
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const blogPostWithHtml: BlogPost & { content: string } = {
    id,
    title: resultObject.title,
    date: resultObject.date,
    content: contentHtml,
  };

  return blogPostWithHtml;
}
