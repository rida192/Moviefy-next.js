"use client";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useBookmarkContext } from "../context/bookmarkContext";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MovieCard = ({ movie, index }: MovieCardProps) => {
  const pathname = usePathname();
  const genre = pathname.split("/")[1];
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkContext();
  // console.log(pathname);

  return (
    movie.original_title !== "Così fan tutte" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: index! * 0.1 }}
        className="bg-gradient-to-tl dark:from-white/20  dark:to-[#222] hover:from-white/30 hover:saturate-[2.5]  backdrop-blur-lg text-center p-2 relative transition-all duration-100 group rounded-sm md:hover:scale-[1.03] text-black dark:text-white shadow-[0_5px_20px_0_rgba(0,0,0,0.3)] shadow-black/70 dark:shadow-none my-2.5"
      >
        <div className="flex justify-between items-center ">
          <div>
            {isBookmarked(movie.id) ? (
              <AnimatePresence>
                <motion.button
                  aria-label="remove from bookmarks"
                  initial={{ opacity: 0.8, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1 }}
                  className=" text-[20px] text-teal-500 "
                  onClick={() => removeBookmark(movie.id)}
                >
                  <FaBookmark />
                </motion.button>
              </AnimatePresence>
            ) : (
              <motion.button
                aria-label="add to bookmarks"
                initial={{ opacity: 0.8, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                className=" text-[20px] dark:text-white text-black  "
                onClick={() => addBookmark(movie)}
              >
                <FaRegBookmark />
              </motion.button>
            )}
          </div>
          <div className="relative text-[38px] justify-center items-center">
            <h2 className=" text-yellow-500">
              <AiFillStar />
            </h2>
            <p className=" absolute text-black text-xs font-bold z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {movie?.vote_average === 0 || movie?.vote_average === 10
                ? movie?.vote_average
                : (movie?.vote_average).toFixed(1)}
            </p>
          </div>
        </div>
        <Link
          aria-label={movie.original_title}
          href={`/${genre ? genre : "movies"}/${movie.id}`}
        >
          <div className="img-container overflow-hidden h-[150px] sm:h-[200px] ">
            <Image
              src={
                movie?.poster_path
                  ? `https://themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`
                  : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png"
              }
              alt="cover image"
              className="transition w-full h-full duration-200 object-fit aspect-auto"
              width={220}
              height={330}
            />
          </div>
          <h2 className="text-sm mt-2 text-ellipsis whitespace-nowrap overflow-hidden">
            {movie.original_title}
          </h2>
        </Link>
      </motion.div>
    )
  );
};

export default MovieCard;
