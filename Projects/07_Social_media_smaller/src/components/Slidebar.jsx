import React from "react";
// CHANGED: Import Link and NavLink from router
import { Link, NavLink } from "react-router-dom";

const Slidebar = () => {
  return (
    <nav
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{
        width: "250px",
        minHeight: "calc(100vh - 70px)", // Assumes header is roughly 70px
      }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">My App</span>
      </Link>
      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          {/* CHANGED: Replaced <a> with <NavLink>.
             NavLink automatically adds the class "active" to the element 
             if the "to" property matches the current browser URL.
             
             Note: text-white is needed so non-active links show up on dark background
          */}
          <NavLink
            to="/"
            className={({ isActive }) => 
              `nav-link text-white ${isActive ? 'active' : ''}`
            }
            aria-current="page"
            onClick={() => console.log("Home clicked")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </NavLink>
        </li>

        <li>
          {/* CHANGED: Fixed onClick to use an arrow function so it doesn't fire on render */}
          <NavLink
            to="/create-post"
            className={({ isActive }) => 
              `nav-link text-white ${isActive ? 'active' : ''}`
            }
            onClick={() => console.log("Create-post clicked")} 
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </NavLink>
        </li>
      </ul>

      <hr />

      <div className="dropdown mt-auto">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        {/* Dropdown menu content... */}
      </div>
    </nav>
  );
};

export default Slidebar;