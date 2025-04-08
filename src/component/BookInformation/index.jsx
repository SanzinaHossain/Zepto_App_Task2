import { useLocation } from "react-router-dom";
import BookDetailsTable from "./BooksDetailsTable";

export default function BookInformation() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <img src={data.formats["image/jpeg"]} alt={data.title} />
      <p className="mt-4 text-center">Book ID : {data.id}</p>
      <h1 className="text-center playwrite-is-title text-first mt-2 ">
        {data.title}
      </h1>
      <p className="mt-3 text-center ">{data.summaries[0]}</p>
      <BookDetailsTable book={data} />
    </div>
  );
}
