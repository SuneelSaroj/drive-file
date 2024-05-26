import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="navbar navbar-expand-lg pt-4">
          <div className="container-fluid">
            <a
              href="/home"
              className="brand text-decoration-none d-block d-lg-none fw-bold fs-1 "
            >
              LOGO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul
                id="nav-length"
                className="navbar-nav justify-content-between border-top border-2 text-center"
              >
                <li className="nav-item">
                  <a href="*" className="nav-link border-hover py-3 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="*" className="nav-link border-hover py-3 text-white">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="*" className="nav-link border-hover py-3 text-white">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="*" className="nav-link border-hover py-3 text-white">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="*" className="nav-link border-hover py-3 text-white">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="*" className="nav-link border-hover py-3 text-white">
                    Sign up
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="*"
                    id="sign-in"
                    className="nav-link my-2 px-4 text-white"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
