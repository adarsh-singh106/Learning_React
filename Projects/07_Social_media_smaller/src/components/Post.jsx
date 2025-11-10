// src/components/Post.jsx
import React, { useContext } from "react";
import { PostList } from "../store/PostListContext";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
      {post.image && (
        <img
          src={post.image}
          className="card-img-top"
          alt={post.title}
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          {post.date}
        </p>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
