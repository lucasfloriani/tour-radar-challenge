import styled from "styled-components";
import Button from "../Button";
import Image from "../Image";
import Typography from "../Typography";
import TextWithMoreItems from "../TextWithMoreItems";

export const Card = styled.article`
  box-shadow: ${({ theme }) => theme.shadows.extraSmall};
  column-gap: 16px;
  display: grid;
  grid-template-areas: "visual header info" "visual content info" "visual content info";
  grid-template-columns: 230px 1fr 200px;
`;

export const VisualSidebar = styled.aside`
  display: grid;
  grid-area: visual;
  height: 100%;
`;

export const ImageFit = styled(Image)`
  max-height: 170px;
  object-fit: cover;
  width: 100%;
`;

export const CardHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.palette["grayscale.400"]};
  grid-area: header;
  margin-bottom: 12px;
  padding-bottom: 12px;
  padding-top: 16px;
`;

export const RatingWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
`;

export const DescriptionText = styled(Typography).attrs({
  color: "grayscale.200",
  size: "small",
})`
  font-style: italic;
  margin-top: 8px;
`;

export const CardContent = styled.div`
  grid-area: content;
  padding-bottom: 12px;
`;

export const ListContent = styled(TextWithMoreItems).attrs({
  color: "grayscale.200",
  size: "small",
})``;

export const ListText = styled(Typography).attrs({
  color: "grayscale.200",
  size: "small",
})``;

export const CardInfo = styled.div`
  grid-area: info;
  padding-right: 12px;
  padding-top: 24px;
`;

export const PriceInfo = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
`;

export const FlexTour = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
    <path
      d="M10 0a10 10 0 1010 10A10.012 10.012 0 0010 0zm5.773 6.833l-5.705 7.741a.842.842 0 01-1.191.157l-4.074-3.257a.834.834 0 011.042-1.302l3.397 2.718 5.189-7.043a.834.834 0 111.342.986z"
      fill="#41c4ab"
    />
  </svg>
);

export const CardActions = styled.div`
  margin-top: 12px;
  width: 100%;
`;

export const ActionButton = styled(Button).attrs({ fontSize: "normal" })`
  font-weight: 700;
  width: 100%;
`;
