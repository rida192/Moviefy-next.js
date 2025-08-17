import PaginationControls from "@/components/paginationControls";
import { fetchLatestMovies } from "@/lib/endpoints";
import MoviesGrid from "@/components/moviesGrid";

export default async function MoviesPage({ searchParams }: SearchParamsProps) {
  const pageNumber = searchParams["page"] ?? "1";

  let moviesList: MovieApiResponse | undefined;
  let error: string | undefined;

  try {
    moviesList = await fetchLatestMovies(pageNumber);
  } catch (err) {
    console.error(err);
    error = "Faild to fetch movies";
  }

  return error ? (
    <div className=" w-full text-center h-full grid place-content-center self-center">
      <h1 className="text-2xl">Something Went Wrong!!</h1>
    </div>
  ) : moviesList ? (
    <main>
      <MoviesGrid moviesList={moviesList} />
      <PaginationControls />
    </main>
  ) : null;
}
