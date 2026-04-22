import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Contract from "./pages/Contract.jsx";
import Cards from "./pages/Cards.jsx";
import WebsiteEvaluation from "./pages/WebsiteEvaluation.jsx";
import Inventory from "./pages/Inventory.jsx";
import Survey from "./pages/Survey.jsx";
import Product from "./pages/Product.jsx";
import Slideshow from "./pages/Slideshow.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contract" element={<Contract />} />
          <Route path="cards" element={<Cards />} />
          <Route path="website-evaluations" element={<WebsiteEvaluation />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="survey" element={<Survey />} />
          <Route path="product" element={<Product />} />
          <Route path="slideshow" element={<Slideshow />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
