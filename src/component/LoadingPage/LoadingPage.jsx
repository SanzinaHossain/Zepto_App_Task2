import { PuffLoader } from "react-spinners";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center p-10 ">
      <PuffLoader color="#3c6e71" size={100} />
    </div>
  );
}
