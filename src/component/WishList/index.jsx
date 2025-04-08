import WishlistHooks from "./Hooks";
import SingleBookList from "./SingleBookList";

export default function WishList() {
  const { wishlist = [], navigate } = WishlistHooks();
  console.log(wishlist?.length);
  return (
    <div className="p-10">
      <h1 className="text-3xl text-first">Wishlisted Books List:</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
        {wishlist?.map((book) => (
          <SingleBookList key={book.id} book={book} navigate={navigate} />
        ))}
      </div>
    </div>
  );
}
