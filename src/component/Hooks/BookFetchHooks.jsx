import { useEffect, useState } from "react";

export default function BookFetchHooks() {
  const [books, setBooks] = useState();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://gutendex.com/books/`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setBooks(data.results);
        localStorage.setItem("books", JSON.stringify(data.results));
        setDataLoading(false);
      } catch (error) {
        console.error("Error fetching Books:", error);
      }
    };

    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
      setDataLoading(false);
    } else {
      fetchBooks();
    }
  }, []);

  return { books, setBooks, dataLoading };
}
