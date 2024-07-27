import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
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
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
