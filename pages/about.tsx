import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="自己紹介" description="自己紹介ページ">
      <p className={styles.colorRed}>こんにちは</p>
      <p>sa</p>
    </Layout>
  );
}
