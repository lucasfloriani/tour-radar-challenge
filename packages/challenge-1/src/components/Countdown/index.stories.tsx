import React from "react";

import Countdown from "./index";

export default {
  title: "Design System/Countdown",
  component: Countdown,
};

const timeNow = new Date();
const fastEndTime = new Date(timeNow.getTime() + 1000 * 10);
const longEndTime = new Date(timeNow.getTime() + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 30);

export const Default = () => <Countdown start={timeNow} end={longEndTime} />;

export const TimeEnding = () => <Countdown start={timeNow} end={fastEndTime} />;
