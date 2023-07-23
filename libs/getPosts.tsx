export default async function getPosts(userId: number) {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error('fetch error');
  }

  return await res.json();
}
