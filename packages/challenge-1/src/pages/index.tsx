import type { NextPage } from "next";
import SwitchLanguage from "components/SwitchLanguage";
import Countdown from "components/Countdown";

const timeNow = new Date();
const longEndTime = new Date(timeNow.getTime() + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 30);

const Home: NextPage = () => {
  return (
    <div>
      <SwitchLanguage />
      <Countdown start={timeNow} end={longEndTime} />
    </div>
  );
};

export default Home;
