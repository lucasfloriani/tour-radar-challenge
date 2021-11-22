import { useEffect, useMemo, useState } from "react";

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

export type FilterOptions = "lowest" | "highest" | "shortest" | "longest";

type UseTourProps = {
  filter: FilterOptions;
};

const sortFilters = {
  lowest: (a: Tour, b: Tour) => a.price - b.price,
  highest: (a: Tour, b: Tour) => b.price - a.price,
  shortest: (a: Tour, b: Tour) => a.length - b.length,
  longest: (a: Tour, b: Tour) => b.length - a.length,
};

// * Custom hook created so in the future we can extend it to include more filters like pagination
const useTours = ({ filter = "lowest" }: UseTourProps) => {
  const [allTours, setAllTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllTours = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(process.env.NEXT_PUBLIC_TOUR_API!);
        const data = await response.json();
        // * Map used only to fix the placeholder images without HTTPS
        setAllTours(
          data.map((tour: Tour) => ({
            ...tour,
            map_url: "https://via.placeholder.com/232x112",
            img_url: "https://via.placeholder.com/232x112",
          }))
        );
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTours();
  }, []);

  const filteredTours = useMemo(() => {
    return allTours.sort(sortFilters[filter]);
  }, [allTours, filter]);

  return { filteredTours, isLoading };
};

export default useTours;
