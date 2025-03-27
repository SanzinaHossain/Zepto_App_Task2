import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar";

export default function App() {
  const [books, setBooks] = useState();
  fetch("https://gutendex.com/books/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      setBooks(data.results);
    });
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
