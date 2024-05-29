"use client";

import MoviesGrid from "@/components/moviesGrid";
import { useBookmarkContext } from "@/context/bookmarkContext";
import { motion } from "framer-motion";

const BookmarkedMovies = () => {
  const { bookmarks } = useBookmarkContext();

  return bookmarks.length !== 0 ? (
    <div className="self-start">
      <MoviesGrid moviesList={bookmarks} />
    </div>
  ) : (
    <div className="w-full text-center h-full grid place-content-center text-black dark:text-white overflow-hidden">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl max-w-2xl"
      >
        Oops! It looks like your bookmarks tab is feeling a bit lonely. Why not
        start adding some bookmarks to keep it company?
      </motion.h1>
    </div>
  );
};

export default BookmarkedMovies;
