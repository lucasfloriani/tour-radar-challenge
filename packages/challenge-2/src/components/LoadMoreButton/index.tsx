import styled from "styled-components";
import Button from "@tour-radar/design-system/components/Button";

const LoadMoreButton = styled(Button).attrs({
  bgColor: "secondary.100",
  hoverBgColor: "secondary.100",
  fontSize: "normal",
  weight: "600",
})`
  align-self: center;
`;

export default LoadMoreButton;
