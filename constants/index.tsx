import { BiSearch, BiCategory, BiCompass } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export const links = [
  { name: "Discover", to: "/", icon: <BiCompass /> },
  { name: "Search", to: "/search", icon: <BiSearch /> },
  // { name: "Trending", to: "/trending", icon: <AiOutlineFire /> },
  { name: "Top Rated", to: "/top-rated", icon: <AiOutlineFire /> },
  // { name: "Watchlist", to: "/watchlist", icon: <BsBookmark /> },
  { name: "Bookmarks", to: "/bookmarked", icon: <BsBookmark /> },
];
