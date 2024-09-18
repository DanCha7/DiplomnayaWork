import { Outlet } from "react-router-dom";
import Header from "../Header";
import Banner from "../Banners/MainBanner";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
