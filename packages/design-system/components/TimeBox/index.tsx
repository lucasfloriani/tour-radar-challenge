import { LabelText, TimeText, Wrapper } from "./style";

type TimeBoxProps = {
  time: number;
  label: string;
};

const TimeBox = ({ time, label }: TimeBoxProps) => {
  return (
    <Wrapper>
      <TimeText>{time}</TimeText>
      <LabelText>{label}</LabelText>
    </Wrapper>
  );
};

export default TimeBox;
