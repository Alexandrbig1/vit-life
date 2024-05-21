import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const theme = {
  light: {
    colors: {
      mainBgColor: "#f9f9f9",
      mainTextColor: "#020617",
      headerTextColor: "#020617",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#333",
      mainTextColor: "#f8fafc",
      headerTextColor: "#f8fafc",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
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
