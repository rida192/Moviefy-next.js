"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PaginationControls = ({ tab }: { tab?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = searchParams.get("page") ?? "1";
  const term = searchParams.get("term") ?? "all";

  const handleNavigation = (type: string) => {
    router.push(
      tab === "search"
        ? `${pathname}${`?term=${term}`}&page=${
            type === "prev" ? Number(page) - 1 : Number(page) + 1
          }`
        : `${pathname}?page=${
            type === "prev" ? Number(page) - 1 : Number(page) + 1
          }`
    );
  };

  return (
    <div className="flex items-center justify-center mt-10  space-x-4 text-black dark:text-white">
      {/* Prev button */}
      <button
        aria-label="Prev button"
        disabled={Number(page) === 1}
        onClick={() => handleNavigation("prev")}
        className={`flex items-center justify-center gap-[4px]  transition duration-200 ${
          Number(page) === 1
            ? "opacity-50 hover:text-black dark:opacity-50 dark:hover:text-white "
            : "hover:text-teal-400"
        }`}
      >
        <AiOutlineArrowLeft />
        Prev
      </button>

      {/* Next button */}
      <button
        aria-label="Next button"
        onClick={() => handleNavigation("next")}
        className={`flex items-center justify-center gap-[4px] transition duration-200 hover:text-teal-400 
        }`}
      >
        Next
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default PaginationControls;
