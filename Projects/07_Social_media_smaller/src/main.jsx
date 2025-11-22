import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './route/App.jsx';
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Default path loads PostList
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);