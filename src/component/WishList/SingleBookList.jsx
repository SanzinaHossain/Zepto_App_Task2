export default function SingleBookList({ book, navigate }) {
  return (
    <div className="relative border border-gray-300 shadow-lg rounded-sm p-5 flex flex-col justify-center items-center">
      <img src={book.formats["image/jpeg"]} alt={book.title} className="h-36" />
      <h1 className="mt-4 text-center playwrite-is-title text-first ">
        {book.title}
      </h1>
      <p className="mt-1 text-center">Book ID : {book.id}</p>
      <p className="mt-1 text-center">Author : {book.authors[0].name}</p>
      <p className="mt-1 text-center">
        Language : {book.languages[0] === "en" ? "English" : "N/A"}
      </p>
      <button
        onClick={() => navigate("/bookInformation", { state: book })}
        className="px-4 py-1 rounded-sm text-white bg-first mt-3 cursor-pointer"
      >
        Details
      </button>
    </div>
  );
}
