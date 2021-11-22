import styled from "styled-components";
import Typography from "../Typography";

export const Wrapper = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette["grayscale.100"]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: flex-end;
  padding-bottom: 2px;
  width: 60px;
`;

export const TimeText = styled(Typography).attrs({
  align: "center",
  as: "p",
  size: "huge",
  weight: "bold",
})``;

export const LabelText = styled(Typography).attrs({
  align: "center",
  as: "p",
  size: "extraSmall",
})`
  text-transform: uppercase;
`;
