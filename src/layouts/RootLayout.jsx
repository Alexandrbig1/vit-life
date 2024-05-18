import { Suspense } from "react";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader";

function RootLayout() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default RootLayout;
