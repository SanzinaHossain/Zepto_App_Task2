export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  return (
    <div className="flex mt-8 space-x-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded-sm disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-gray-300 rounded-sm disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
