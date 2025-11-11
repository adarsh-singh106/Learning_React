// src/components/PostList.jsx
import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/PostListContext";
import CoverPage from "./CoverPage";

const PostList = () => {
  const { postList , addInitPost  } = useContext(PostListContext);
  const handleOnAddDummyPosts = () => {
  fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => addInitPost(data.posts)) // use 'data.posts' because API returns { posts: [...] }
    .catch(err => console.error("Error fetching dummy posts:", err));
};

  return (
    <div className="d-flex flex-wrap gap-3 p-3 justify-content-start">
      {postList.length > 0 ? (
        postList.map((p) => <Post key={p.id} post={p} />)
      ) : <CoverPage onAddDummyPosts={handleOnAddDummyPosts} /> }
    </div>
  );
};

export default PostList;
