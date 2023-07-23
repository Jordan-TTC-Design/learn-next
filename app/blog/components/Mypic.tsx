import Image from 'next/image';
export default function MyPic() {
  return (
    <section>
      <Image
        src='/images/my-pic.jpeg'
        alt='照片'
        width={200}
        height={200}
        className='object-cover rounded-full aspect-square'
      />
    </section>
  );
}
