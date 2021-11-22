import TourCard from "@tour-radar/design-system/components/TourCard";
import { ListWrapper } from "./style";
import { Tour } from "../../hooks/useTours";

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
