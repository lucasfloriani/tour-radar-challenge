import { useMemo, useState } from "react";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Select, SelectItem } from "@tour-radar/design-system/components/Select";
import ListTours from "components/ListTours";
import Container from "components/Container";

export interface Tour {
  id: number;
  title: string;
  flexible_booking: boolean;
  reviews: {
    cnt: number;
    avg: number;
    sample: string;
  };
  map_url: string;
  img_url: string;
  destinations: string[];
  length: number;
  age_min: number;
  age_max: number;
  regions: string[];
  travel_styles: string[];
  operated_in: string[];
  price: number;
}

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
  const [filter, setFilter] = useState<FilterOptions>("lowest");
  const filteredTours = useMemo(() => tours.sort(sortFilters[filter]), [tours, filter]);

  return (
    <Container>
      <Select
        name="sort"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value as FilterOptions)}
      >
        <SelectItem value="lowest">Total price: Lowest first</SelectItem>
        <SelectItem value="highest">Total price: Highest first</SelectItem>
        <SelectItem value="shortest">Duration: Shortest first</SelectItem>
        <SelectItem value="longest">Duration: Longest first</SelectItem>
      </Select>
      <ListTours tours={filteredTours} />
    </Container>
  );
};

export default Home;
