import { Star, Wrapper } from "./style";

type RatingProps = {
  value: number;
  size?: "small" | "medium" | "large";
};

const getDecimal = (value: number) => Number((value % 1).toFixed(1));

const Rating = ({ size = "small", value }: RatingProps) => {
  // * This amount of calculations is not ideal, but sadly because of the way that JS works with floating point numbers,
  // * it was necessary to do like that so we doesn't need a library for it.
  const listOfValues = Array(5)
    .fill(0)
    .map((_, index) => {
      if (Math.floor(value) >= index + 1) return 1;
      if (Math.ceil(value) === index + 1 && getDecimal(value) !== 0) return getDecimal(value);
      return 0;
    });

  return (
    <Wrapper>
      {listOfValues.map((itemValue, index) => (
        <Star key={index} percent={itemValue} size={size} />
      ))}
    </Wrapper>
  );
};
export default Rating;
