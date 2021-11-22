import styled from "styled-components";

type StarProps = {
  percent: number;
  size: keyof typeof sizes;
};

const sizes = {
  small: "16px",
  medium: "20px",
  large: "30px",
};

export const Star = styled.div.attrs((props: StarProps) => ({
  percent: props.percent ?? 1,
  size: props.size,
}))`
  background: ${({ percent }) =>
    `linear-gradient(90deg, #ffc101 0%, #ffc101 ${percent * 100}%, #fff ${percent * 100}%, #fff 100%)`};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  height: ${({ size }) => sizes[size]};
  width: ${({ size }) => sizes[size]};
`;

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 2px;
`;
