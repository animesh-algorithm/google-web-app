import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%]">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}) seconds
      </p>
    </div>
  );
};

export default SearchResults;
