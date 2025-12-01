import React, { useEffect } from "react";

import { usePostsStore } from "../store/postsStore.js";

function Posts() {
  const { posts, loading, error, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
