import { useEffect } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import WishList from "../WishList";
import BookDetails from "./BookDetails";
import Cover from "./Cover";
import BookHooks from "./Hooks";
import Pagination from "./Pagination";

export default function Home() {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    dataLoading,
    handleBookWishlist,
    wishlist,
    filteredBooks,
    searchText,
    setSearchText,
    selectedGenre,
    setSelectedGenre,
    allGenres,
    navigate,
  } = BookHooks();

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div>
      <div className="p-10 flex flex-col justify-center items-center">
        <Cover />

        <div className="flex gap-5 justify-center items-center">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="mt-8 p-2 w-full max-w-md border border-gray-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-first"
          />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="mt-8 p-2 w-full max-w-md border border-gray-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-first"
          >
            <option value="">All Genres</option>
            {allGenres.map((genre, idx) => (
              <option key={idx} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {dataLoading ? (
          <LoadingPage />
        ) : (
          <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
              {filteredBooks?.length > 0 ? (
                filteredBooks.map((book, index) => (
                  <BookDetails
                    key={index}
                    index={index}
                    book={book}
                    handleBookWishlist={handleBookWishlist}
                    wishlist={wishlist}
                    navigate={navigate}
                  />
                ))
              ) : (
                <p className="col-span-full text-gray-500">No books found.</p>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
      <WishList />
    </div>
  );
}
