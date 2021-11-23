import Head from "next/head";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMemo, useState } from "react";
import { Select, SelectItem } from "@tour-radar/design-system/components/Select";
import ListTours, { Tour } from "components/ListTours";
import LoadMoreButton from "components/LoadMoreButton";
import Container from "components/Container";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(process.env.NEXT_PUBLIC_TOUR_API!);
  const data = await response.json();
  // * Map used only to fix the placeholder images without HTTPS
  const tours: Tour[] = data.map((tour: Tour) => ({
    ...tour,
    map_url: "https://via.placeholder.com/232x112",
    img_url: "https://via.placeholder.com/232x112",
  }));

  return {
    props: {
      tours,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

const sortFilters = {
  lowest: (a: Tour, b: Tour) => a.price - b.price,
  highest: (a: Tour, b: Tour) => b.price - a.price,
  shortest: (a: Tour, b: Tour) => a.length - b.length,
  longest: (a: Tour, b: Tour) => b.length - a.length,
};

type FilterOptions = "lowest" | "highest" | "shortest" | "longest";

const Home: NextPage = ({ tours }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<FilterOptions>("lowest");
  const filteredTours = useMemo(() => tours.sort(sortFilters[filter]).slice(0, page * 10), [tours, filter, page]);

  return (
    <>
      <Head>
        <title>TourRadar - Challenge 2</title>
      </Head>
      <Container>
        <Select
          name="sort"
          value={filter}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setPage(1);
            setFilter(e.target.value as FilterOptions);
          }}
        >
          <SelectItem value="lowest">Total price: Lowest first</SelectItem>
          <SelectItem value="highest">Total price: Highest first</SelectItem>
          <SelectItem value="shortest">Duration: Shortest first</SelectItem>
          <SelectItem value="longest">Duration: Longest first</SelectItem>
        </Select>
        <ListTours tours={filteredTours} />
        {tours.length > filteredTours.length && (
          <LoadMoreButton onClick={() => setPage((previousValue) => previousValue + 1)}>Load more</LoadMoreButton>
        )}
      </Container>
    </>
  );
};

export default Home;
