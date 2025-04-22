import Image from "next/image";

const ActorDetails = ({ actor }: { actor: CastMember }) => {
  return (
    <div className="my-2.5 shadow-[0_5px_10px_0_rgba(0,0,0,0.3)] shadow-black/70 rounded-sm overflow-hidden bg-gradient-to-tl dark:from-white/20  dark:to-[#222] hover:from-white/30 hover:saturate-[2.5]  backdrop-blur-lg text-center p-2 relative transition-all duration-100 group  md:hover:scale-[1.03] text-black dark:text-white dark:shadow-none ">
      <div className="h-[150px] sm:h-[200px] ">
        <Image
          unoptimized
          className="transition w-full h-full duration-200 object-fill"
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face${actor?.profile_path}`}
          // srcSet={`https://media.themoviedb.org/t/p/w138_and_h175_face${actor?.profile_path} 1x, https://media.themoviedb.org/t/p/w276_and_h350_face${actor?.profile_path} 2x`}
          // alt={actor.original_name}
          width={100}
          height={100}
          alt="actor profile"
        />
      </div>

      <div className="p-2">
        <p className=" font-semibold text-base md:text-lg">
          {actor?.original_name}
        </p>
        <p className="text-sm">{actor?.character}</p>
      </div>
    </div>
  );
};

export default ActorDetails;
