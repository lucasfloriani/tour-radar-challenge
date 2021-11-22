import React from "react";

import Loader from "./index";

export default {
  title: "Design System/Loader",
  component: Loader,
};

export const Default = () => <Loader />;

const AnimationWrapper: React.FC = ({ children }) => (
  <div
    style={{
      display: "grid",
      gap: "10px",
      gridTemplateColumns: "auto 1fr",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);
export const AnimationTime = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <AnimationWrapper>
      <Loader animationTime="1s" />
      <span>1s</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader animationTime="1.5s" />
      <span>1.5s</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader animationTime="2s" />
      <span>2s</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader animationTime="2.5s" />
      <span>2.5s</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader animationTime="3s" />
      <span>3s</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader animationTime="3.5s" />
      <span>3.5s</span>
    </AnimationWrapper>
  </div>
);

export const BackgroundColors = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <AnimationWrapper>
      <Loader bgColor="primary.100" />
      <span>Primary 100</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="primary.200" />
      <span>Primary 200</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="primary.300" />
      <span>Primary 300</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="primary.400" />
      <span>Primary 400</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="primary.500" />
      <span>Primary 500</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="secondary.100" />
      <span>Secondary 100</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="grayscale.100" />
      <span>Grayscale 100</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="grayscale.200" />
      <span>Grayscale 200</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="grayscale.300" />
      <span>Grayscale 300</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="grayscale.400" />
      <span>Grayscale 400</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader bgColor="grayscale.500" />
      <span>Grayscale 500</span>
    </AnimationWrapper>
  </div>
);

export const Colors = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <AnimationWrapper>
      <Loader color="primary.100" />
      <span>Primary 100</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="primary.200" />
      <span>Primary 200</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="primary.300" />
      <span>Primary 300</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="primary.400" />
      <span>Primary 400</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="primary.500" />
      <span>Primary 500</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="secondary.100" />
      <span>Secondary 100</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="grayscale.100" />
      <span>Grayscale 100</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="grayscale.200" />
      <span>Grayscale 200</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="grayscale.300" />
      <span>Grayscale 300</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="grayscale.400" />
      <span>Grayscale 400</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader color="grayscale.500" />
      <span>Grayscale 500</span>
    </AnimationWrapper>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <AnimationWrapper>
      <Loader size="extraSmall" />
      <span>Extra Small</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader size="small" />
      <span>Small</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader size="medium" />
      <span>Medium</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader size="normal" />
      <span>Normal</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader size="large" />
      <span>Large</span>
    </AnimationWrapper>
    <AnimationWrapper>
      <Loader size="extraLarge" />
      <span>Extra Large</span>
    </AnimationWrapper>
  </div>
);
