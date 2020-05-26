import React, { useState, useEffect } from 'react';
import Posts from '../details/Posts';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const result = await axios('https://dev.to/api/articles?username=stephdb');
    const fetchedPosts = result.data;

    if (fetchedPosts.length > 0) {
      setPosts(fetchedPosts);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
    //   eslint-disable-next-line
  }, []);
  return (
    <div className="blog">
      <h1>Blog</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
};

export default Blog;
