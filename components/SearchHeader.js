import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term?.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
          <input
            type="text"
            className="w-full focus:outline-none"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            onClick={() => {
              searchInputRef.current.value = "";
            }}
            className="text-gray-500 cursor-pointer h-7 sm:mr-3"
          />
          <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
          <SearchIcon
            className="hidden h-6 pl-4 text-blue-500 border-l-2 sm:inline-flex"
          />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
