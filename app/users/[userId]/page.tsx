import getUser from '@/libs/getUser';
import getPosts from '@/libs/getPosts';
import { Suspense } from 'react';
import UserPosts from '@/components/UserPosts';
import type { Metadata } from 'next';
type Params = {
  params: {
    userId: number;
  };
};

// 動態 metadata
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const user = await getUser(userId);
  return {
    title: user.name,
    description: user.name,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post> = getPosts(userId);
  // const [user, userPosts] = await Promise.all([userData, userPostData]);
  // console.log(user, userPosts);

  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}
