import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import MockData from "../MockData";

const search = ({ results }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData
    ? MockData
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && `&searchType=image`
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
};

export default search;
