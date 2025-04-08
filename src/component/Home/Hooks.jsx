import { useState } from "react";
import BookFetchHooks from "../Hooks/BookFetchHooks";

export default function BookHooks() {
  const { books, dataLoading } = BookFetchHooks();

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books?.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil((books?.length || 0) / booksPerPage);

  const handleBookWishlist = (book) => {
    const alreadyInWishlist = wishlist.some((item) => item.id === book.id);
    let updatedWishlist;

    if (alreadyInWishlist) {
      updatedWishlist = wishlist.filter((item) => item.id !== book.id);
    } else {
      updatedWishlist = [...wishlist, book];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return {
    currentPage,
    setCurrentPage,
    books,
    currentBooks,
    totalPages,
    dataLoading,
    handleBookWishlist,
    wishlist,
  };
}
