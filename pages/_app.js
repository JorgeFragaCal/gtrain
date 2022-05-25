import "../styles/globals.scss";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import initAuth from "utils/initAuth";

initAuth();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
