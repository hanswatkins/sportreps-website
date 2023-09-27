import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
