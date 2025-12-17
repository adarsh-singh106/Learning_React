import React from "react";

const Navbar = () => {
  return (
    <div className="my-4 flex h-15 items-center justify-center gap-2 rounded-lg bg-white text-xl font-bold shadow-md">
      <img src="/logos_firebase.svg" alt="logo" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;