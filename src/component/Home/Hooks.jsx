import { useState } from "react";
import BookFetchHooks from "../Hooks/BookFetchHooks";

export default function BookHooks() {
  const { books, dataLoading } = BookFetchHooks();

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books?.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil((books?.length || 0) / booksPerPage);
  return {
    currentPage,
    setCurrentPage,
    books,
    currentBooks,
    totalPages,
    dataLoading,
  };
}
