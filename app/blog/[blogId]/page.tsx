import { getSortedPostsData, getPostData } from '@/libs/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  const posts = getSortedPostsData();
  const paths = posts.map(post => ({
    params: {
      blogId: post.id,
    },
  }));
  return paths;
}

export default async function page({ params }: { params: { blogId: string } }) {
  const posts = getSortedPostsData();
  const { blogId } = params;
  const postData = posts.find(post => post.id === blogId);
  if (!postData) {
    return notFound();
  }
  const { title, date, content } = await getPostData(blogId);

  return (
    <main className='bg-gray-300 w-full p-8'>
      <div className='space-y-6'>
        <h2>{title}</h2>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <Link href='/blog'>Back to Blogs</Link>
      </div>
    </main>
  );
}
