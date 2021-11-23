import TourCard from "@tour-radar/design-system/components/TourCard";
import { ListWrapper } from "./style";

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

type ListTourProps = {
  tours: Tour[];
};

const ListTours = ({ tours }: ListTourProps) => {
  return (
    <ListWrapper>
      {tours.map((tour) => (
        <TourCard
          key={`${tour.id}-${tour.title}`}
          title={tour.title}
          flexibleBooking={tour.flexible_booking}
          reviews={tour.reviews.cnt}
          rating={tour.reviews.avg}
          reviewDescription={tour.reviews.sample}
          mapImg={tour.map_url}
          image={tour.img_url}
          minAge={tour.age_min}
          maxAge={tour.age_max}
          destinations={tour.destinations}
          regions={tour.regions}
          travelStyles={tour.travel_styles}
          operatedIn={tour.operated_in}
          tourLength={tour.length}
          price={tour.price}
        />
      ))}
    </ListWrapper>
  );
};

export default ListTours;
