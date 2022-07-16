import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <div className="rounder"></div>
      <div className="rounder2"></div>
      <div className="rounder3"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
