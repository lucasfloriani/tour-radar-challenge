import React from "react";

import Button from "./index";

export default {
  title: "Design System/Button",
  component: Button,
};

export const Default = () => <Button>Default</Button>;

export const BackgroundColors = () => (
  <div style={{ display: "inline-grid", gap: "1em" }}>
    <Button bgColor="primary.100" hoverBgColor="primary.100">
      Primary 100
    </Button>
    <Button bgColor="primary.200" hoverBgColor="primary.200">
      Primary 200
    </Button>
    <Button bgColor="primary.300" hoverBgColor="primary.300">
      Primary 300
    </Button>
    <Button bgColor="primary.400" hoverBgColor="primary.400">
      Primary 400
    </Button>
    <Button bgColor="primary.500" hoverBgColor="primary.500">
      Primary 500
    </Button>
    <Button bgColor="secondary.100" hoverBgColor="secondary.100">
      Secondary 100
    </Button>
    <Button bgColor="grayscale.100" hoverBgColor="grayscale.100">
      Grayscale 100
    </Button>
    <Button bgColor="grayscale.200" hoverBgColor="grayscale.200">
      Grayscale 200
    </Button>
    <Button bgColor="grayscale.300" hoverBgColor="grayscale.300">
      Grayscale 300
    </Button>
    <Button bgColor="grayscale.400" hoverBgColor="grayscale.400">
      Grayscale 400
    </Button>
    <Button bgColor="grayscale.500" hoverBgColor="grayscale.500">
      Grayscale 500
    </Button>
  </div>
);

export const FontSizes = () => (
  <div style={{ display: "inline-grid", gap: "1em" }}>
    <Button fontSize="extraSmall">Extra Small</Button>
    <Button fontSize="small">Small</Button>
    <Button fontSize="normal">Normal</Button>
    <Button fontSize="medium">Medium</Button>
    <Button fontSize="large">Large</Button>
    <Button fontSize="extraLarge">Extra Large</Button>
  </div>
);

export const HoverBackgroundColors = () => (
  <div style={{ display: "inline-grid", gap: "1em" }}>
    <Button hoverBgColor="primary.100">Primary 100</Button>
    <Button hoverBgColor="primary.200">Primary 200</Button>
    <Button hoverBgColor="primary.300">Primary 300</Button>
    <Button hoverBgColor="primary.400">Primary 400</Button>
    <Button hoverBgColor="primary.500">Primary 500</Button>
    <Button hoverBgColor="secondary.100">Secondary 100</Button>
    <Button hoverBgColor="grayscale.100">Grayscale 100</Button>
    <Button hoverBgColor="grayscale.200">Grayscale 200</Button>
    <Button hoverBgColor="grayscale.300">Grayscale 300</Button>
    <Button hoverBgColor="grayscale.400">Grayscale 400</Button>
    <Button hoverBgColor="grayscale.500">Grayscale 500</Button>
  </div>
);

export const TextColor = () => (
  <div style={{ display: "inline-grid", gap: "1em" }}>
    <Button txtColor="primary.100">Primary 100</Button>
    <Button txtColor="primary.200">Primary 200</Button>
    <Button txtColor="primary.300">Primary 300</Button>
    <Button txtColor="primary.400">Primary 400</Button>
    <Button txtColor="primary.500">Primary 500</Button>
    <Button txtColor="secondary.100">Secondary 100</Button>
    <Button txtColor="grayscale.100">Grayscale 100</Button>
    <Button txtColor="grayscale.200">Grayscale 200</Button>
    <Button txtColor="grayscale.300">Grayscale 300</Button>
    <Button txtColor="grayscale.400">Grayscale 400</Button>
    <Button txtColor="grayscale.500">Grayscale 500</Button>
  </div>
);

export const FontWeight = () => (
  <div style={{ display: "inline-grid", gap: "1em" }}>
    <Button weight="100">Font Weight 100</Button>
    <Button weight="200">Font Weight 200</Button>
    <Button weight="300">Font Weight 300</Button>
    <Button weight="400">Font Weight 400</Button>
    <Button weight="500">Font Weight 500</Button>
    <Button weight="600">Font Weight 600</Button>
    <Button weight="700">Font Weight 700</Button>
    <Button weight="800">Font Weight 800</Button>
    <Button weight="900">Font Weight 900</Button>
    <Button weight="light">Font Weight light</Button>
    <Button weight="normal">Font Weight normal</Button>
    <Button weight="bold">Font Weight bold</Button>
  </div>
);
