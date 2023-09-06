import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
