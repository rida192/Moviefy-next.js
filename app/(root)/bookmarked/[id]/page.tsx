import {
  fetchMovieCreadits,
  fetchMovieDetails,
  fetchSimilerMovies,
} from "@/lib/endpoints";
import MovieDetails from "@/components/movieDetails";

const BookmarksPage = async ({ params }: { params: { id: string } }) => {
  const { id: movieId } = params;

  let movie: Movie | undefined;
  let movieCreadits: MovieCredits | undefined;
  let similerMovies: MovieApiResponse | undefined;

  try {
    movie = await fetchMovieDetails(movieId);
    movieCreadits = await fetchMovieCreadits(movieId);
    similerMovies = await fetchSimilerMovies(movieId);
  } catch (error) {
    console.log("this is the error", error);
  }
  // fetch similer movies
  // const { data: similerMovies } = useGetSimilerMoviesQuery(movieId);
  // const { data: movieCreadits } = useGetMovieCreaditsQuery(movieId);
  // const divRef = useRef(null);

  // return error ? (
  //   <>Somthing Went Wrong!!</>
  // ) : isLoading || isFetching ? (
  //   <>
  //     <Loader />
  //   </>
  // ) :pt-28 pb-28 md:pt-40

  return movie ? (
    <MovieDetails
      movie={movie}
      movieCreadits={movieCreadits}
      similerMovies={similerMovies}
    />
  ) : null;
};

export default BookmarksPage;
