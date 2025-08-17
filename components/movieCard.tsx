"use client";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useBookmarkContext } from "../context/bookmarkContext";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import path from "path";

const MovieCard = ({ movie, index }: MovieCardProps) => {
  const pathname = usePathname();
  const genre = pathname.split("/")[1];
  console.log("this is the pathname", pathname);
  console.log("this is the genre", genre);
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkContext();

  return (
    movie.original_title !== "Così fan tutte" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: index! * 0.1 }}
        className=" dark:text-white shadow-[0_5px_20px_0_rgba(0,0,0,0.3)] shadow-black/70 dark:shadow-none my-2.5 bg-gradient-to-tl dark:from-white/20  dark:to-[#222] hover:from-white/30 hover:saturate-[2.5]  backdrop-blur-lg text-center p-2 transition-all duration-100 group  md:hover:scale-[1.03] text-black rounded-md  "
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
        </div>
        <Link aria-label={movie.original_title} href={`${genre}/${movie.id}`}>
          <div className="img-container overflow-hidden h-[150px] sm:h-[200px] ">
            <Image
              unoptimized
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt="cover image"
              className="rounded-lg h-full w-full transition duration-200 object-fit aspect-auto"
              width={220}
              height={330}
            />
          </div>

          {/* content */}
          <div>
            <h2 className="text-left mt-2 text-ellipsis whitespace-nowrap overflow-hidden  font-bold text-base line-clamp-1 dark:text-white text-black">
              {movie.original_title}
            </h2>
            <div className=" flex items-center gap-1">
              <h2 className=" text-yellow-500 size-4 object-contain">
                <AiFillStar />
              </h2>
              <p className="  text-xs font-bold dark:text-white text-black">
                {movie?.vote_average === 0 || movie?.vote_average === 10
                  ? movie?.vote_average
                  : (movie?.vote_average).toFixed(1)}
              </p>
              <span>•</span>
              <p className=" dark:text-gray-300 text-black/90 text-xs">
                {movie.original_language}
              </p>
              <span>•</span>
              <p className=" dark:text-gray-300  text-black/90 text-xs">
                {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  );
};

export default MovieCard;
