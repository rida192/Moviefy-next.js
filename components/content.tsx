// app/components/Content.js
import MoviesGrid from "@/components/moviesGrid";

const Content = async ({ moviesList }: ContentProps) => {
  return (
    <div>
      <MoviesGrid moviesList={moviesList} />
    </div>
  );
};

export default Content;
