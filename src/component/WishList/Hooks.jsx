import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WishlistHooks() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    setWishlist(storedWishlist);
  }, []);

  return { wishlist, navigate };
}
