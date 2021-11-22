import { Star, Wrapper } from "./style";

type RatingProps = {
  value: number;
  size?: "small" | "medium" | "large";
};

const Rating = ({ size = "small", value }: RatingProps) => {
  const listOfValues = [
    ...Array(Math.floor(value)).fill(1),
    ...(value - Math.floor(value) === 0 ? [] : [value - Math.floor(value)]),
  ];

  return (
    <Wrapper>
      {listOfValues.map((itemValue, index) => (
        <Star key={index} percent={itemValue} size={size} />
      ))}
    </Wrapper>
  );
};
export default Rating;
