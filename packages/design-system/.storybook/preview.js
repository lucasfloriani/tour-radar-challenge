import React from "react";
import Theme from "../components/Theme";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
