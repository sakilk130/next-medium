import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
