import type { NextPage } from "next";
import Head from "next/head";
import SwitchLanguage from "components/SwitchLanguage";
import Countdown from "components/Countdown";
import Card from "components/Card";
import { MINUTE, DAY } from "../helpers/time";

const timeNow = new Date();
const longEndTime = new Date(timeNow.getTime() + DAY * 3 + MINUTE * 30);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TourRadar - Challenge 1</title>
      </Head>
      <Card>
        <SwitchLanguage />
        <Countdown start={timeNow} end={longEndTime} />
      </Card>
    </>
  );
};

export default Home;
