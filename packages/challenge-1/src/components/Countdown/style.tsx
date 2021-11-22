import styled from "styled-components";
import Typography from "@tour-radar/design-system/components/Typography";

export const Wrapper = styled.section`
  display: grid;
  gap: 3px;
`;

type WrapperProps = {
  boxQty: number;
};

export const BoxWrapper = styled.div.attrs((props: WrapperProps) => ({
  boxQty: props?.boxQty,
}))`
  display: inline-grid;
  gap: 8px;
  grid-template-columns: ${({ boxQty }) => `repeat(${boxQty}, auto)`};
`;

export const CountdownTitle = styled(Typography).attrs({
  as: "h4",
  size: "small",
  weight: "600",
})`
  letter-spacing: 3px;
  text-transform: uppercase;
`;
