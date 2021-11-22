import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageProps = {
  alt: string;
  src: string;
};

// * For the lazy loading of the images, it was added the library react-lazy-load-image-component.
// * That brings all the configuration and logic that we need for this feature so we don't need to write
// * a lot of boilerplate code for it.
const Image = styled(LazyLoadImage).attrs((props: ImageProps) => ({
  alt: props.alt,
  src: props.src,
  effect: "opacity",
  wrapperProps: { style: { display: "flex" } },
}))``;

export default Image;
