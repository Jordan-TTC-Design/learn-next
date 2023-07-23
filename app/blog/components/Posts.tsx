import { getSortedPostsData } from '@/libs/posts';
import ListItem from './ListItem';

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className='mt-6 mx-auto max-w-2xl space-y-4 w-full'>
      <h2 className='text-zh-head-4 '>blog</h2>
      <ul className='w-full space-y-4'>
        {posts.map(post => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
