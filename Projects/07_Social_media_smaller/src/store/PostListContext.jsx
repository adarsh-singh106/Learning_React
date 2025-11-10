// src/store/PostListContext.js
import { createContext, useReducer } from "react";

// 🔹 Initial state
const DEFAULT_STATE = [];

// 🔹 Reducer function
const PostListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state]; // add new post at top
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

// 🔹 Context creation
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// 🔹 Provider
export const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(PostListReducer, DEFAULT_STATE);

  const addPost = (newPost) => {
  dispatch({ type: "ADD_POST", payload: newPost });
};


  const deletePost = (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
