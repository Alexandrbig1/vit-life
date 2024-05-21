import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { Container } from "../components/layout";

// eslint-disable-next-line react/prop-types
function RootLayout({ toggleTheme, isDarkTheme }) {
  return (
    <div style={{ position: "relative" }}>
      {/* <Container> */}
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {/* </Container> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default RootLayout;
