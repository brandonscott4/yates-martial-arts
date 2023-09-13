import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Root;
