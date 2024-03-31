import React from 'react';
import { posts } from './data/posts';
import ListCategory from './ListCategory';
import './PostDitail.css'
import { useParams } from 'react-router-dom';

export default function PostDitail() {
  const { postId } = useParams();
  const post = posts.find(post => post.id === parseInt(postId));

  return (
    <>
      <div className="container">
        <img src={post.thumbnailUrl} alt={post.title} />
        <div className="info">
          <div className="date">
            {post.createdAt.substring(0, 10).replace(/-/g, '/')}
          </div>
          <div className="categories">
            {post.categories.map(category => (
              <ListCategory key={category} category={category}/>
            ))}
          </div>
        </div>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      </div>
    </>
   );
}