import { useEffect, useState } from "react";

export default function WishlistHooks() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    setWishlist(storedWishlist);
  }, []);

  return { wishlist };
}
