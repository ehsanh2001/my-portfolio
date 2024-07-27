import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <Outlet />
        </div>
      </div>
      <footer class="bg-dark text-white p-4 text-center">
        <a href="https://github.com/ehsanh2001" class="text-white">
          <img
            src="../public/github.png"
            alt="github"
            width="50"
            height="50"
            target="_blank"
          />
        </a>

        <a
          className="ms-2"
          href="https://www.linkedin.com/in/ehsan-hosseini-/"
          class="text-white"
        >
          <img
            src="../public/linkedin.png"
            alt="linkedin"
            width="50"
            height="50"
            target="_blank"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
