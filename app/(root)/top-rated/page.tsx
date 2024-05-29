import PaginationControls from "@/components/paginationControls";
import { fetchTopRatedMovies } from "@/lib/endpoints";
import MoviesGrid from "@/components/moviesGrid";

const TopRated = async ({ searchParams }: SearchParamsProps) => {
  const pageNumber = searchParams["page"] ?? "1";

  let moviesList: MovieApiResponse | undefined;
  let error: string | undefined;

  try {
    moviesList = await fetchTopRatedMovies(pageNumber);
  } catch (err) {
    console.error(err);
    error = "Faild to fetch movies";
  }

  return error ? (
    <div className=" w-full text-center h-full grid place-content-center self-center">
      <h1 className="text-2xl">Something Went Wrong!!</h1>
    </div>
  ) : moviesList ? (
    <main className="self-start">
      <MoviesGrid moviesList={moviesList} />
      <PaginationControls />
    </main>
  ) : null;
};

export default TopRated;
