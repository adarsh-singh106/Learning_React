// src/components/PostList.jsx
import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/PostListContext";
import CoverPage from "./CoverPage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitPost } = useContext(PostListContext);
  const [dataFetching, setDataFetching] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts", { signal });
        const data = await res.json();
        addInitPost(data.posts);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch posts:", err);
        }
      } finally {
        setDataFetching(false);
      }
    };

    fetchPosts();

    // Cleanup → abort request on unmount
    return () => controller.abort();
  }, [addInitPost]);

  return (
    <div className="d-flex flex-wrap gap-3 p-3 justify-content-start">
      {dataFetching && <LoadingSpinner />}

      {!dataFetching && postList.length > 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)
      }

      {!dataFetching && postList.length === 0 && <CoverPage />}
    </div>
  );
};

export default PostList;
