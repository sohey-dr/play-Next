import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Next.js使ってみた</title>
        <meta name="description" content="Next.jsのテストです。" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>Next.js使ってみた</h1>
    </div>
  );
}
