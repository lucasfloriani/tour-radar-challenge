import React from "react";
import Theme from "@tour-radar/design-system/components/Theme";
import "../translations";

export const wrapper = ({ children }: { children: React.ReactNode }) => <Theme>{children}</Theme>;
