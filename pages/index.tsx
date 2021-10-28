import Layout from "../components/layout";
import { useEffect, useState } from "react";

const startTime = new Date().getTime();

export default function Home() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((new Date().getTime() - startTime) / 1000);
    }, 1000);
  }, [time]);

  return (
    <Layout title="ホームページタイトル" description="ホームページ概要">
      <p>ホームページコンテンツ</p>
      <p>読み込んでからかかった時間: { time }秒</p>
    </Layout>
  );
}
