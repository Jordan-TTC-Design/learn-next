type Props = {
  promise: Promise<Post>;
};
export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  console.log(posts);
  const content = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <br />
    </div>
  ));
  return content;
}
