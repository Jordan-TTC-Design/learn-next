import type { Metadata } from 'next';
import getAllUsers from '@/libs/getAllUsers';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Users',
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  console.log(users);
  const content = (
    <section>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
      {users.map(user => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
          <br />
        </div>
      ))}
    </section>
  );
  return content;
}
