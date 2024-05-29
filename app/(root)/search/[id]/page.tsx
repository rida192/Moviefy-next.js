import MovieDetails from "@/components/movieDetails";
import {
  fetchMovieCreadits,
  fetchMovieDetails,
  fetchSimilerMovies,
} from "@/lib/endpoints";

const PageSearch = async ({ params }: { params: { id: string } }) => {
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

  return movie ? (
    <MovieDetails
      movie={movie}
      movieCreadits={movieCreadits}
      similerMovies={similerMovies}
    />
  ) : null;
};

export default PageSearch;
