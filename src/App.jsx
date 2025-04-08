import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div className="mt-18">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
