import { AiFillStar } from "react-icons/ai";
import MotionH2 from "./motinH2";
import MotionDiv from "./motionDiv";
import Image from "next/image";
import Title from "./title";
import ActorDetails from "./actorDetails";
import MovieCard from "./movieCard";

const MovieDetails = ({
  movie,
  movieCreadits,
  similerMovies,
}: MovieDetailsProps) => {
  console.log("RAW API DATA:", {
    poster_path: movie?.poster_path,
    full_url: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
  });

  return (
    <MotionDiv
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      // className="flex flex-col  pt-28 pb-28 md:pt-40 fadeAnimate"
      // ref={divRef}
    >
      <div className="flex flex-col  gap-8 max-w-[1200px] md:px-6 text-black dark:text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-2">
          <div className="">
            <MotionH2
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className=" text-2xl  lg:text-4xl max-w-[700px] mb-4 text-center lg:text-start"
            >
              {movie?.original_title}
            </MotionH2>

            {/* getting the release date data */}
            <div className="flex gap-2 text-black dark:text-gray-300 font-light justify-center lg:justify-start flex-wrap">
              Movies .<p>{movie?.original_language}</p>.{" "}
              <p>{movie?.release_date?.slice(0, 4)}</p> .{" "}
              {movie?.genres.slice(0, 2).map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
              .{" "}
              {`${Math.floor(movie?.runtime! / 60)}h ${movie?.runtime! % 60}m`}
            </div>
          </div>
          <div className="flex">
            <p className="text-2xl text-yellow-500">
              <AiFillStar />
            </p>
            {/* fixing the number */}
            <p>{movie?.vote_average!.toFixed(1)} / 10</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-32 mb-7 lg:mb-10 ">
          <div className=" w-[290px] h-[270px] lg:h-[390px]  self-center lg:self-start shadow-[0_5px_20px_0_rgba(0,0,0,0.3)] shadow-black/70 dark:shadow-none">
            <Image
              unoptimized
              alt="poster image"
              width={200}
              height={200}
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              className="object-fit max-h-full w-full"
            />
          </div>
          <div className="flex-1">
            <div className="mb-8">
              <i className="text-xl text-black/80 dark:text-white/80 font-mono">
                {movie?.tagline}
              </i>
            </div>
            <Title name={"Overview"} text={movie?.overview} />
          </div>
        </div>

        <Title name={"Movie Cast"} />

        <div className="scroller pb-2 px-1 scroll-px-2 grid grid-flow-col auto-cols-[45%] sm:auto-cols-[40%] md:auto-cols-[30%] lg:auto-cols-[20%] gap-4 overflow-x-auto snap-x  [&>*]:snap-start mb-7 md:mb-10    ">
          {movieCreadits?.cast?.map(
            (actor) =>
              actor?.profile_path && (
                <ActorDetails key={actor.id} actor={actor} />
              )
          )}
        </div>

        {similerMovies && similerMovies?.results?.length > 0 && (
          <Title name={"Similer Movies"} />
        )}

        <div className="scroller  pb-2 px-1 scroll-px-2 grid grid-flow-col auto-cols-[45%] sm:auto-cols-[40%] md:auto-cols-[30%] lg:auto-cols-[20%]  gap-4 overflow-x-auto snap-x  [&>*]:snap-start ">
          {similerMovies?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default MovieDetails;
