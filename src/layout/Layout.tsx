import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Router from "../router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
