import "../styles/globals.scss";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import Head from "next/head";
import initAuth from "utils/initAuth";

initAuth();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-gtrain-azul.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
