import React from "react";

import Typography from "./index";

export default {
  title: "Design System/Typography",
  component: Typography,
};

export const Default = () => <Typography>Default</Typography>;

export const Sizes = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <Typography size="extraSmall">Extra Small</Typography>
    <Typography size="small">Small</Typography>
    <Typography size="normal">Normal</Typography>
    <Typography size="medium">Medium</Typography>
    <Typography size="large">Large</Typography>
    <Typography size="extraLarge">Extra Large</Typography>
  </div>
);

export const Colors = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <Typography color="primary.100" size="extraLarge">
      Primary 100
    </Typography>
    <Typography color="primary.200" size="extraLarge">
      Primary 200
    </Typography>
    <Typography color="primary.300" size="extraLarge">
      Primary 300
    </Typography>
    <Typography color="primary.400" size="extraLarge">
      Primary 400
    </Typography>
    <Typography color="primary.500" size="extraLarge">
      Primary 500
    </Typography>
    <Typography color="secondary.100" size="extraLarge">
      Secondary 100
    </Typography>
    <Typography color="grayscale.100" size="extraLarge">
      Grayscale 100
    </Typography>
    <Typography color="grayscale.200" size="extraLarge">
      Grayscale 200
    </Typography>
    <Typography color="grayscale.300" size="extraLarge">
      Grayscale 300
    </Typography>
    <Typography color="grayscale.400" size="extraLarge">
      Grayscale 400
    </Typography>
    <Typography color="grayscale.500" size="extraLarge">
      Grayscale 500
    </Typography>
  </div>
);

export const FontWeight = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <Typography weight="100" size="extraLarge">
      Font Weight 100
    </Typography>
    <Typography weight="200" size="extraLarge">
      Font Weight 200
    </Typography>
    <Typography weight="300" size="extraLarge">
      Font Weight 300
    </Typography>
    <Typography weight="400" size="extraLarge">
      Font Weight 400
    </Typography>
    <Typography weight="500" size="extraLarge">
      Font Weight 500
    </Typography>
    <Typography weight="600" size="extraLarge">
      Font Weight 600
    </Typography>
    <Typography weight="700" size="extraLarge">
      Font Weight 700
    </Typography>
    <Typography weight="800" size="extraLarge">
      Font Weight 800
    </Typography>
    <Typography weight="900" size="extraLarge">
      Font Weight 900
    </Typography>
    <Typography weight="light" size="extraLarge">
      Font Weight light
    </Typography>
    <Typography weight="normal" size="extraLarge">
      Font Weight normal
    </Typography>
    <Typography weight="bold" size="extraLarge">
      Font Weight bold
    </Typography>
  </div>
);
