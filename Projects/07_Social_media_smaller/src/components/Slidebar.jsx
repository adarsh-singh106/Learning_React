import React from "react";

const Slidebar = ({ selected_tab, set_selected_tab }) => {
  return (
    <nav
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{
        width: "250px",
        minHeight: "calc(100vh - 70px)",
        position: "fixed",
        top: "70px", // ✅ Push below the header
        left: 0,
        overflowY: "auto",
        zIndex: 900,
      }}
    >
      {/* Brand / Header */}
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">My App</span>
      </div>
      <hr />

      {/* Nav links */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => set_selected_tab("Home")}>
          <a
            href="#"
            className={`nav-link ${
              selected_tab === "Home" ? "active" : "text-white"
            }`}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>

        <li onClick={() => set_selected_tab("Create Post")}>
          <a
            href="#"
            className={`nav-link ${
              selected_tab === "Create Post" ? "active" : "text-white"
            }`}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>

      <hr />

      {/* Profile Dropdown */}
      <div className="dropdown mt-auto">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Slidebar;
