import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { CalculatorSBP } from "./features/calculators/components/CalculatorSBP";
import { CalculatorNNO } from "./features/calculators/components/CalculatorNNO";
import { CalculatorNOK } from "./features/calculators/components/CalculatorNOK";
import { CalculatorNAW } from "./features/calculators/components/CalculatorNAW";

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
            <Route path="kalkulator1" element={<CalculatorSBP />} />
            <Route path="kalkulator2" element={<CalculatorNNO />} />
            <Route path="kalkulator3" element={<CalculatorNOK />} />
            <Route path="kalkulator4" element={<CalculatorNAW />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
