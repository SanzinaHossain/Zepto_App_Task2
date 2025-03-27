import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-first p-8 text-white">
      <div className="flex gap-x-2 justify-center items-center text-2xl">
        <BsFacebook />
        <FaInstagramSquare />
        <AiFillTwitterCircle />
      </div>
      <p className="text-center text-lg font-bold mt-1">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  );
}
