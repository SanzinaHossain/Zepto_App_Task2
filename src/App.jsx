import { useState } from "react";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState();
  fetch("https://gutendex.com/books/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      setBooks(data.results);
    });
  return <button className="btn btn-secondary">{books.length}</button>;
}
