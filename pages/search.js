import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import MockData from "../MockData";

const search = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Results */}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const mockData = true;
  const data = mockData
    ? MockData
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && `&searchType=image`
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
};

export default search;
