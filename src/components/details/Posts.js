import React from 'react';
import './Posts.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h4>Loading blog posts...</h4>;
  }

  return (
    <div className="posts-display">
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <img
              src={post.cover_image}
              alt={post.title}
              className="blog-cover-img"
            />
            <a
              href={post.canonical_url}
              alt={post.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{post.title}</h2>
            </a>
            <p>{post.description}</p>
            <a
              href={post.canonical_url}
              alt={post.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Read more...</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
