import React, { useState, useContext } from "react";
import { PostList } from "../store/PostListContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();


  // form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState(""); // for online image
  const [localImage, setLocalImage] = useState(null); // for local file
  const [publish, setPublish] = useState(false);

  // handle local image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL to show image preview
      setLocalImage(URL.createObjectURL(file));
      setImageURL(""); // clear online URL if local selected
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all required fields!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      image: localImage || imageURL || "", // priority: local > online > none
      published: publish,
    };

    addPost(newPost);

    // reset form
    setTitle("");
    setContent("");
    setImageURL("");
    setLocalImage(null);
    setPublish(false);
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h4 className="mb-3">Create a New Post</h4>

      {/* Title */}
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your post title"
        />
      </div>

      {/* Content */}
      <div className="mb-3">
        <label htmlFor="postContent" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="postContent"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something interesting..."
        ></textarea>
      </div>

      {/* Online image URL */}
      <div className="mb-3">
        <label htmlFor="imageURL" className="form-label">
          Image URL (optional)
        </label>
        <input
          type="text"
          className="form-control"
          id="imageURL"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
            setLocalImage(null); // clear local if URL entered
          }}
          placeholder="Paste an online image link"
        />
      </div>

      {/* OR Upload local image */}
      <div className="mb-3">
        <label htmlFor="postImage" className="form-label">
          Or Upload Image from Device
        </label>
        <input
          type="file"
          className="form-control"
          id="postImage"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      {/* Preview */}
      {(localImage || imageURL) && (
        <div className="mb-3 text-center">
          <p className="fw-bold">Image Preview:</p>
          <img
            src={localImage || imageURL}
            alt="preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      )}

      {/* Publish checkbox */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="publishCheck"
          checked={publish}
          onChange={(e) => setPublish(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="publishCheck">
          Publish immediately
        </label>
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary w-100">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
