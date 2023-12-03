import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const ExampleContent = React.lazy(() => import("./pages/ExamplePage"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="example" element={<ExampleContent />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
