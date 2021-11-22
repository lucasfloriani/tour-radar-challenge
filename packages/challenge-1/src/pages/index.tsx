import type { NextPage } from "next";
import SwitchLanguage from "components/SwitchLanguage";
import Countdown from "components/Countdown";
import { MINUTE, DAY } from "../helpers/time";

const timeNow = new Date();
const longEndTime = new Date(timeNow.getTime() + DAY * 3 + MINUTE * 30);

const Home: NextPage = () => {
  return (
    <div>
      <SwitchLanguage />
      <Countdown start={timeNow} end={longEndTime} />
    </div>
  );
};

export default Home;
