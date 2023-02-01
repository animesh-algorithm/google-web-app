import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex > 1 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 1}`}
        >
          <button className="flex items-center justify-center w-10 h-10 mr-2 text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 1}`}
        >
          <button className="flex items-center justify-center w-10 h-10 text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </Link>
      )}
    </div>
  );
}
