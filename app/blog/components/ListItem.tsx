import getFormattedDate from '@/libs/getFormattedDate';
import Link from 'next/link';
type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const formattedDate = getFormattedDate(post.date);
  return (
    <li className='w-full'>
      <Link
        href={`/blog/${post.id}`}
        className='px-3 py-2 bg-white rounded space-y-2 block'
      >
        <h3 className='text-zh-head-3'>{post.title}</h3>
        <p className='text-zh-body-1'>{formattedDate}</p>
        <p className='whitespace-pre-line'>{post.content}</p>
      </Link>
    </li>
  );
}
