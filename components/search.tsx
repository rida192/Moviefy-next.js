"use client";

import { useRouter } from "next/navigation";
import { FormEvent, RefObject, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  //  Handle form submission
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value!;
    if (value === "") return;
    setText(value);
    router.push(`/search?term=${value}`);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="flex justify-center mx-auto">
        <form
          onSubmit={onSubmit}
          className="flex shadow-[0_5px_20px_0_rgba(0,0,0,0.3)] rounded-r-full rounded-l-full dark:shadow-none"
        >
          {/* input feild */}
          <input
            ref={inputRef}
            className="text-black focus:outline-none py-2 pr-11 pl-4  rounded-full w-[300px] sm:w-[500px] "
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          {/* submit button */}
          <button
            aria-label="Submit button"
            className="rounded-r-full bg-teal-400 h-10 w-10 text-black text-2xl flex items-center justify-center -ml-10 font-light focus:outline-teal-100  "
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <h1 className="mt-8 text-black dark:text-white/80 text-sm md:text-lg">
        Showing results for {text}
      </h1>
    </div>
  );
};

export default Search;
