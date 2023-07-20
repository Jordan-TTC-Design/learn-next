export default async function getUser(userId: number) {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + userId,
  );

  if (!res.ok) {
    throw new Error('fetch error');
  }

  return await res.json();
}
