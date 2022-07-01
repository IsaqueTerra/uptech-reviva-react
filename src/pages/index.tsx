import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="./icons/logo-favicon.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reviva Fashion</title>
      </Head>
      <Main />
    </div>
  );
};

export default Home;
