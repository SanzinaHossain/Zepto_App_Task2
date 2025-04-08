import { useState, useMemo } from "react";
import BookFetchHooks from "../Hooks/BookFetchHooks";

export default function BookHooks() {
  const { books, dataLoading } = BookFetchHooks();
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(""); // <-- New state

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const allGenres = useMemo(() => {
    const genresSet = new Set();
    books?.forEach((book) => {
      book.bookshelves?.forEach((shelf) => genresSet.add(shelf));
    });
    return Array.from(genresSet);
  }, [books]);

  const filteredBooksBySearchAndGenre = books?.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesGenre = selectedGenre
      ? book.bookshelves?.includes(selectedGenre)
      : true;
    return matchesTitle && matchesGenre;
  });

  const totalPages = Math.ceil(
    (filteredBooksBySearchAndGenre?.length || 0) / booksPerPage
  );
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooksBySearchAndGenre?.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const handleBookWishlist = (book) => {
    const alreadyInWishlist = wishlist.some((item) => item.id === book.id);
    const updatedWishlist = alreadyInWishlist
      ? wishlist.filter((item) => item.id !== book.id)
      : [...wishlist, book];

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
    filteredBooks: currentBooks,
    setSearchText,
    searchText,
    selectedGenre,
    setSelectedGenre,
    allGenres,
  };
}
