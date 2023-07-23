import MyPic from '@/app/blog/components/Mypic';
import Posts from '@/app/blog/components/Posts';
export const metadata = {
  title: 'blog',
  description: '這是我在學習 Next.js 的筆記',
};

export default function Blog() {
  return (
    <main className='container py-12 flex flex-col items-center'>
      <MyPic></MyPic>
      <h2 className='my-12 text-zh-head-2 text-center'>
        Hello and welcome
        <span className='whitespace-newrap text-zh-body-1'>{`I'm Jordan`}</span>
      </h2>
      <Posts></Posts>
    </main>
  );
}
