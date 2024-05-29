// "use client";
import MovieCard from "@/components/movieCard";
// import { useEffect, useRef } from "react";

const MoviesGrid = ({ moviesList }: MovieGridProps) => {
  // const divRef = useRef(null);

  // useEffect(() => {
  //   //@ts-ignore
  //   divRef?.current?.scrollIntoView({ behavior: "smooth" });
  // });

  return (
    <>
      <div
        // ref={divRef}
        // layout pt-28 md:pt-40
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7  gap-8 place-content-center  fadeAnimate"
      >
        {moviesList?.results
          ? moviesList?.results?.map((movie: Movie, index: number) => (
              <MovieCard
                index={index}
                key={movie.id}
                className="w-[200px] h-[150px]"
                movie={movie}
              />
            )) // @ts-ignore
          : moviesList?.map((movie: Movie, index: number) => (
              // <AnimatePresence>
              <MovieCard
                index={index}
                key={movie.id}
                className="w-[200px] h-[150px]"
                movie={movie}
              />
              // </AnimatePresence>
            ))}
      </div>
    </>
  );
};

export default MoviesGrid;
