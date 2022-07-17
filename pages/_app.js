import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
