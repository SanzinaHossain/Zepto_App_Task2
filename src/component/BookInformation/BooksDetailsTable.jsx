export default function BookDetailsTable({ book }) {
  return (
    <div className="mt-10">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse border border-gray-300">
          <thead>
            <tr className="bg-first text-white text-left">
              <th className="p-3 border border-gray-300">Download</th>
              <th className="p-3 border border-gray-300">Author</th>
              <th className="p-3 border border-gray-300">Media Type</th>
              <th className="p-3 border border-gray-300">Copyright</th>
              <th className="p-3 border border-gray-300">Languages</th>
              <th className="p-3 border border-gray-300">Subjects</th>
              <th className="p-3 border border-gray-300">Bookshelves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-300">
                {book.download_count}
              </td>
              <td className="p-3 border border-gray-300">
                {book.authors.map((item, index) => (
                  <span key={index}>{item.name}</span>
                ))}
              </td>
              <td className="p-3 border border-gray-300">{book.media_type}</td>
              <td className="p-3 border border-gray-300">
                {book.copyright ? "True" : "False"}
              </td>
              <td className="p-3 border border-gray-300">
                {book.languages.map((lang, index) => (
                  <span key={index}>{lang === "en" ? "English" : lang}</span>
                ))}
              </td>
              <td className="p-3 border border-gray-300">
                <ul>
                  {book.subjects.map((s, index) => (
                    <li key={index}>{s}</li>
                  ))}
                </ul>
              </td>
              <td className="p-3 border border-gray-300">
                <ul>
                  {book.bookshelves.map((b, index) => (
                    <li key={index}>{b}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="block md:hidden space-y-4">
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
          <p>
            <strong>Download:</strong> {book.download_count}
          </p>
          <p>
            <strong>Author:</strong>
            {book.authors.map((a) => a.name).join(", ")}
          </p>
          <p>
            <strong>Media Type:</strong> {book.media_type}
          </p>
          <p>
            <strong>Copyright:</strong> {book.copyright ? "True" : "False"}
          </p>
          <p>
            <strong>Languages:</strong>
            {book.languages.map((l) => (l === "en" ? "English" : l)).join(", ")}
          </p>
          <p>
            <strong>Subjects:</strong>
            <ul className="list-disc list-inside">
              {book.subjects.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </p>
          <p>
            <strong>Bookshelves:</strong>
            <ul className="list-disc list-inside">
              {book.bookshelves.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
