import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Link from "../components/Link";

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>useTypewriter Hook</title>
        <meta name="useTypewriter" content="Document on how to get started" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-name-wrapper"></div>
      <Logo />
      <Link to="/documentation">
        <button className="documentation-button">View Documentation</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
