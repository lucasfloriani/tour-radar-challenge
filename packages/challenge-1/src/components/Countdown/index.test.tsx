import React from "react";
import { act, render, screen } from "@testing-library/react";
import { SECOND, MINUTE } from "../../helpers/time";
import { wrapper } from "../../tests/utils";

import Countdown from ".";

describe("Countdown component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render correctly with default config", () => {
    const timeNow = new Date();
    const endTime = new Date(timeNow.getTime() + SECOND * 10);
    const { container } = render(<Countdown start={timeNow} end={endTime} />, { wrapper });
    expect(container).toMatchSnapshot();
  });

  it("should decrease the time", () => {
    const timeNow = new Date();
    const endTime = new Date(timeNow.getTime() + SECOND * 10);

    act(() => {
      render(<Countdown start={timeNow} end={endTime} />, { wrapper });
    });
    expect(screen.getAllByText("0").length).toBe(3);
    expect(screen.getAllByText("10").length).toBe(1);

    act(() => jest.advanceTimersByTime(SECOND));
    expect(screen.getAllByText("0").length).toBe(3);
    expect(screen.getAllByText("9").length).toBe(1);
  });

  it("should decrease the time to zero and stop", () => {
    const timeNow = new Date();
    const endTime = new Date(timeNow.getTime() + SECOND * 10);

    act(() => {
      render(<Countdown start={timeNow} end={endTime} />, { wrapper });
    });
    expect(screen.getAllByText("0").length).toBe(3);
    expect(screen.getAllByText("10").length).toBe(1);

    act(() => jest.advanceTimersByTime(SECOND * 10));
    expect(screen.getAllByText("0").length).toBe(4);

    act(() => jest.advanceTimersByTime(SECOND));
    expect(screen.getAllByText("0").length).toBe(4);
  });

  it("should decrease minutes", () => {
    const timeNow = new Date();
    const endTime = new Date(timeNow.getTime() + MINUTE);

    act(() => {
      render(<Countdown start={timeNow} end={endTime} />, { wrapper });
    });
    expect(screen.getAllByText("0").length).toBe(3);
    expect(screen.getAllByText("1").length).toBe(1);

    act(() => jest.advanceTimersByTime(SECOND));
    expect(screen.getAllByText("0").length).toBe(3);
    expect(screen.getAllByText("59").length).toBe(1);
  });
});
