// src/components/PostList.jsx
import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/PostListContext";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  return (
    <div className="d-flex flex-wrap gap-3 p-3 justify-content-start">
      {postList.length > 0 ? (
        postList.map((p) => <Post key={p.id} post={p} />)
      ) : (
        <p className="text-muted">No posts yet. Create one!</p>
      )}
    </div>
  );
};

export default PostList;
