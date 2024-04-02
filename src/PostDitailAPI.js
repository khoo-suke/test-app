import React, { useEffect, useState } from 'react';
import './PostDitail.css';
import { useParams } from 'react-router-dom';

export default function PostDitailAPI() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
      const data = await res.json();
      const foundPost = data.posts.find(post => post.id === parseInt(postId));
      setPost(foundPost);
    };
    fetcher();
  }, [postId]);

  return (
    <>
      {post && (
      <div className="container">
        <img src={post.thumbnailUrl} alt={post.title} />
        <div className="info">
          <div className="date">
            {post.createdAt.substring(0, 10).replace(/-/g, '/')}
          </div>
          <div className="categories">
            {post.categories.map(category => (
              <p>{category}</p>
            ))}
          </div>
        </div>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
        </div>
        )}
    </>
  );
}
