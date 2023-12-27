import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TestingApp from "./TestingApp";

const Layout = () => {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <TestingApp />

        <Footer />
      </div>
    </>
  );
};

export default Layout;
