import React, { memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./path";

const Register = React.lazy(() => import("../pages/Registration"));


function AppRoutes() {
  return (
    <Suspense fallback={""}>
      <Routes>
        <Route path={"/"} element={<Register />} />
          </Routes> 
        <Routes> 
        <Route path={paths.register} element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default memo(AppRoutes);
