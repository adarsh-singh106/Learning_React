import React from "react";

const CoverPage = () => {
     
  return (
    <center className="text-center d-flex flex-column justify-content-center align-items-center px-3" style={{ minHeight: "80vh" }}>
      <h1 className="fw-bold mb-3">Welcome to Mini Social</h1>
      <p className="lead mb-4">
        Looks like your feed is empty! Start your journey by adding some posts and explore what others are sharing.
      </p>
      <p className="lead">
        {/* <button
          onClick={onAddDummyPosts}
          className="btn btn-lg btn-primary fw-bold text-white shadow-sm"
        >
          Generate Sample Posts
        </button> */}
      </p>
    </center>
  );
};

export default CoverPage;
