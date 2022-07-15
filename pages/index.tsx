import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Home = () => (
  <div className="container">
    <Head>
      <title>Little Strawberry</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header title="Welcome to Little Strawberry - math challenges" />
      <p className="description">Coming soon - maths challenges</p>
    </main>

    <Footer />
  </div>
);

export default Home;
