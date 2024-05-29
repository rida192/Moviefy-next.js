// app/components/Content.js
import MoviesGrid from "@/components/moviesGrid";

const Content = async ({ moviesList }: ContentProps) => {
  // console.log(moviesList);
  // error ? (
  //   <div className="w-full text-center my-auto h-full grid place-content-center">
  //     <h1 className="text-2xl mt-[150px] md:mt-[0px] lg:mt-[350px]">
  //       Something Went Wrong!!
  //     </h1>
  //   </div>
  // ) :
  return (
    //  !moviesList ? (  <Loader />) :
    <div>
      <MoviesGrid moviesList={moviesList} />
    </div>
  );
};

export default Content;
