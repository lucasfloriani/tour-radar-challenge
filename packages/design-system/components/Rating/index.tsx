import { Star, Wrapper } from "./style";

type RatingProps = {
  value: number;
  size?: "small" | "medium" | "large";
};

const Rating = ({ size = "small", value }: RatingProps) => {
  // * This amount of calculations is not ideal, but sadly because of the way that JS works with floating point numbers,
  // * it was necessary to do like that so we doesn't need a library for it.
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
