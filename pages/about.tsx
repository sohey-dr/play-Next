import Layout from "../components/layout";
import { GetStaticProps } from "next";

type Props = {
  updated: string;
};

const Home = ({ updated }: Props) => {
  function clickHandler(): void {
      console.log("Clicked");
    }

  return (
    <Layout title="自己紹介" description="自己紹介ページ">
      <p>こんにちは</p>
      <p>sa</p>
      <button onClick={clickHandler}>
        こんにちは
      </button>
      {updated}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const data = await res.json();

  return {
    props: {
      updated: data.time.updated,
    },
  };
};

export default Home;