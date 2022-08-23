import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/d14a45b8f3.js"
          crossOrigin="anonymous"
          async
        ></script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
