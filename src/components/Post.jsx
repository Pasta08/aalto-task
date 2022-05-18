import React from "react";
import "../Styles/Post.css";
const Post = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="loading">
        <h1>LOADING...</h1>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <div className="post-wrap" key={post.id}>
          <p className="post-id">{post.id}</p>
          <p className="post-title"> {post.title}</p>
          <p className="post-completed">
            {post.completed ? <i className="fas fa-check"></i> : "x"}
          </p>
        </div>
      ))}
    </>
  );
};

export default Post;
