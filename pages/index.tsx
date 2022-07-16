import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import QuizIcon from "../public/quiz.svg";
import Button from "@components/Button";
import Link from "next/link";

const Home = () => (
  <div className="bg-purple-200 h-screen">
    <div className="flex flex-col min-h-full flex-grow items-stretch justify-center">
      <Head>
        <title>Purple Strawberry Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-grow">
        <Header title="Purple Strawberry Club" />

        <QuizIcon />

        <p className="p-4">Are you ready to take the quiz?</p>
        <Link href="/quiz">
          <Button>Let's go</Button>
        </Link>
      </main>
      <Footer />
    </div>
  </div>
);

export default Home;
