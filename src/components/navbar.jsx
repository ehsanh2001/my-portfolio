import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const styles = {
    Navbar: {
      backgroundImage: "url('./nav-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "200px",
    },
    navLink: {
      color: "white",
      fontSize: "1.5rem",
    },
    myName: {
      color: "white",
      fontSize: "2.5rem",
      paddingLeft: "2rem",
    },
  };

  return (
    <nav
      style={styles.Navbar}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container-fluid">
        <h1 style={styles.myName} className="navbar-brand mb-0">
          Ehsan Hosseini
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={styles.navLink} className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link style={styles.navLink} to="/" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link style={styles.navLink} to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link style={styles.navLink} to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link style={styles.navLink} to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
