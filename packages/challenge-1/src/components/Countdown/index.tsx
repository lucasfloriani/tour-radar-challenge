import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import TimeBox from "@tour-radar/design-system/components/TimeBox";
import { getTimeDiffObj } from "helpers/time";
import { BoxWrapper, CountdownTitle, Wrapper } from "./style";

type CountdownBoxOptions = {
  seconds: boolean;
  minutes: boolean;
  hours: boolean;
  days: boolean;
};

type CountdownProps = {
  start?: Date;
  end: Date;
  titleKey?: string;
  timeOptions?: CountdownBoxOptions;
};

const defaultTimeOptions: CountdownBoxOptions = {
  seconds: true,
  minutes: true,
  hours: true,
  days: true,
};

const Countdown = ({
  start = new Date(),
  end,
  titleKey = "countdown-title",
  timeOptions = defaultTimeOptions,
}: CountdownProps) => {
  const { t } = useTranslation();
  const [startTime, setStartTime] = useState(start);
  const [endTime] = useState(end);

  const timeValues = useMemo(() => getTimeDiffObj(startTime, endTime), [startTime, endTime]);
  const qtyOfBoxes = useMemo(() => Object.values(timeOptions).filter((value) => value).length, [timeOptions]);

  useEffect(() => {
    if (startTime >= endTime) return;

    const interval = setInterval(() => {
      setStartTime((previousTime) => new Date(previousTime.getTime() + 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime, startTime]);

  return (
    <Wrapper>
      <CountdownTitle>{t(titleKey)}</CountdownTitle>
      <BoxWrapper boxQty={qtyOfBoxes}>
        {timeOptions.days && <TimeBox time={timeValues.days} label={t("days")} />}
        {timeOptions.hours && <TimeBox time={timeValues.hours} label={t("hours")} />}
        {timeOptions.minutes && <TimeBox time={timeValues.minutes} label={t("minutes")} />}
        {timeOptions.seconds && <TimeBox time={timeValues.seconds} label={t("seconds")} />}
      </BoxWrapper>
    </Wrapper>
  );
};

export default Countdown;
