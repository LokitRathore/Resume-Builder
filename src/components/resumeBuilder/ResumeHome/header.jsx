import React, { Link } from "react-router-dom";

const ResHeader = () => {
  return (
    <header className="forNavBar ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Resume Builder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNavDropdown"
            // aria-controls="navbarNavDropdown"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
                {/* <a className="nav-link active">Home</a> */}
              </li>
              <li className="nav-item">
                <Link to="/ResumeView" className="nav-link active">
                  Resume View
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Downlod pdf
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default ResHeader;
