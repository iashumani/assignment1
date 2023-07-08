/*
 *
 * Copyright (c) 2022 Adani Digital Labs
 * All rights reserved.
 * Adani Digital Labs Confidential Information
 *
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
const App = () => {
  return (
      <BrowserRouter basename="/myassignment">
              <AppRoutes />
      </BrowserRouter>
  );
};
export default App;
