import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Webtoon from "./pages/Webtoon";
import ChapitrePage from "./pages/ChapitrePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/:section/:chapter" element={<ChapitrePage />} />
          <Route path="/" element={<Home />} />
          <Route path="/:section" element={<Webtoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
