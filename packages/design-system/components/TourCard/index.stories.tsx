import React from "react";

import TourCard from "./index";

export default {
  title: "Design System/TourCard",
  component: TourCard,
};

export const Default = () => (
  <TourCard
    title="liquip sunt enim id"
    flexibleBooking
    reviews={418}
    rating={3.52}
    reviewDescription="dolor velit ad consectetur nisi aute sit dolore deserunt dolore eu consectetur magna dolore laborum"
    mapImg="https://via.placeholder.com/150"
    image="https://via.placeholder.com/150"
    minAge={18}
    maxAge={64}
    destinations={["Masthope", "Groveville", "Sisquoc", "Cazadero", "Noxen", "Nile", "Gerton"]}
    regions={["Belgium", "Hungary", "Gabon", "Iran", "Yugoslavia", "Vatican City State (Holy See)", "South Africa"]}
    travelStyles={["Safari", "Group", "Wildlife"]}
    operatedIn={["Spanish"]}
    tourLength={36}
    price={3943.43}
  />
);
