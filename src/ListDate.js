
export default function ListDate() {
  const updatedPosts = posts.map((post) => {
    const date = new Date(post.createdAt);
    const formattedDate = date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '.');

    return {
      ...post,
      createdAt: formattedDate,
      };
  });
};