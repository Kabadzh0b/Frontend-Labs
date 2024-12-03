import { Part1 } from "modules/part1/part1";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Part1 />} />
        <Route path="/part2" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);