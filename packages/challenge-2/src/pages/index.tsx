import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { Select, SelectItem } from "@tour-radar/design-system/components/Select";
import Loader from "@tour-radar/design-system/components/Loader";
import useTours, { FilterOptions } from "hooks/useTours";
import ListTours from "components/ListTours";
import Container from "components/Container";

const LoaderContainer = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 22px;
  display: grid;
  height: calc(100vh - 96px);
  place-content: center;
  width: 100%;
`;

const Home: NextPage = () => {
  const [filter, setFilter] = useState<FilterOptions>("lowest");
  const { filteredTours, isLoading } = useTours({ filter });

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
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <ListTours tours={filteredTours} />
      )}
    </Container>
  );
};

export default Home;
