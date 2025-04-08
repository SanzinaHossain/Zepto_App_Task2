import LoadingPage from "../LoadingPage/LoadingPage";
import BookDetails from "./BookDetails";
import Cover from "./Cover";
import BookHooks from "./Hooks";
import Pagination from "./Pagination";

export default function Home() {
  const {
    currentPage,
    setCurrentPage,
    currentBooks,
    totalPages,
    dataLoading,
    handleBookWishlist,
    wishlist,
  } = BookHooks();

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <Cover />
      {dataLoading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
            {currentBooks?.map((book, index) => (
              <BookDetails
                key={index}
                index={index}
                book={book}
                handleBookWishlist={handleBookWishlist}
                wishlist={wishlist}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}
