import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageProps = {
  alt: string;
  src: string;
};

const Image = styled(LazyLoadImage).attrs((props: ImageProps) => ({
  alt: props.alt,
  src: props.src,
  effect: "opacity",
  wrapperProps: { style: { display: "flex" } },
}))``;

export default Image;
