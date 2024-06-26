import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import RootLayout from "../layouts/RootLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const theme = {
  light: {
    colors: {
      mainBgColor: "#f9f9f9",
      mainTextColor: "#020617",
      secondaryTextColor: "#606060",
      headerBgColor: "#ebeaea",
      headerTextColor: "#020617",
      secondaryHeaderTextColor: "#02061770",
      accentColor: "#00CC99",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#333",
      mainTextColor: "#f8fafc",
      secondaryTextColor: "#B0B0B0",
      headerBgColor: "#4e4d4d",
      headerTextColor: "#f8fafc",
      secondaryHeaderTextColor: "#f8fafc70",
      accentColor: "#6600FF",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Apparel = lazy(() => import("../pages/Apparel/Apparel"));
const Join = lazy(() => import("../pages/Join/Join"));
const Sale = lazy(() => import("../pages/Sale/Sale"));
const Products = lazy(() => import("../pages/Products/Products"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const isDark = localStorage.getItem("isDarkTheme");
    return isDark === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = prev ? "light" : "dark";
      localStorage.setItem("isDarkTheme", newTheme);
      return !prev;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        }
      >
        <Route
          index
          element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
        />
        <Route path="about" element={<About />} />
        <Route path="sale" element={<Sale />} />
        <Route path="join_us" element={<Join />} />
        <Route path="apparel" element={<Apparel />} />
        <Route path="products" element={<Products />} />
        <Route
          path="privacy"
          element={
            <Privacy
              scrollToTop={scrollToTop}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          }
        />
        <Route
          path="terms"
          element={
            <Terms
              scrollToTop={scrollToTop}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              scrollToTop={scrollToTop}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          }
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme[isDarkTheme ? "dark" : "light"]}>
      <GlobalStyle />
      <FontsHelmet />
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
