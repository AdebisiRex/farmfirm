import { Link } from "react-router-dom";
import logo from "../resources/logonName.png";
import classes from "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar position-absolute navbar-expand-md px-1 p-0 w-100">
        <div className="container-fluid p-0 position-relative ">
          <Link className="navbar-brand mx-md-3 " to="/">
            <img src={logo} height={60} alt="" />
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" navbar-toggler-icon"></span>
          </button>
          <div className={classes.collapseBack + " collapse navbar-collapse" } id="navbarNav">
            <div className="me-auto">
              <ul className={" navbar-nav"}>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link text-primary fw-bold" to="#">
                    Home
                  </Link>
                </li>
                <li className={" nav-item mx-md-2"}>
                  <Link className="nav-link" to="#">
                    Product
                  </Link>
                </li>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link" to="#">
                    Team
                  </Link>
                </li>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link" to="#">
                    Blog
                  </Link>
                </li>
                <li className="nav-item mx-md-2">
                  <Link className="nav-link" to="#">
                    Contact
                  </Link>
                </li>
                <li className="nav-item me-md-2"></li>
              </ul>
            </div>

            <div className="me-1">
              <ul className="navbar-nav">
                <li className="nav-item mx-md-3 ">
                  <Link className="nav-link fw-bold text-info " to="#">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item mx-md-3">
                  <button className="btn btn-outline-light mb-3 px-5 text-white ">Sign in</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
