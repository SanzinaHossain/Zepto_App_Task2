import WishlistHooks from "./Hooks";
import SingleBookList from "./SingleBookList";

export default function WishList() {
  const { wishlist, navigate } = WishlistHooks();
  return (
    <div className="p-10">
      <h1 className="text-3xl text-first">Wishlisted Books List:</h1>
      {wishlist.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
          {wishlist.map((book, index) => (
            <SingleBookList key={index} book={book} navigate={navigate} />
          ))}
        </div>
      ) : (
        <p className="text-red-700 font-bold text-lg mt-5">
          There is no book found in wish list
        </p>
      )}
    </div>
  );
}
