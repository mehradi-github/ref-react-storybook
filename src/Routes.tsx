import React, { FC, PropsWithChildren, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomPage";
const AppRoutes: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div id="modal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {children}
        </Routes>
      </div>
    </>
  );
};
export default AppRoutes;
