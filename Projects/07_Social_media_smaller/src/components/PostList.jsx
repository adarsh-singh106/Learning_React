import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/PostListContext";
import CoverPage from "./CoverPage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitPost } = useContext(PostListContext);
  
  // FIX 1: Initialize fetching to false if we already have data
  const [dataFetching, setDataFetching] = useState(postList.length === 0);

  useEffect(() => {
    // FIX 2: Check if posts already exist. If yes, stop here.
    if (postList.length > 0) {
        setDataFetching(false);
        return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPosts = async () => {
      // Only set loading true if we are actually fetching
      setDataFetching(true); 
      
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

    return () => controller.abort();
    
    // FIX 3: Add postList to dependencies so it knows when to skip
  }, [postList, addInitPost]); 

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