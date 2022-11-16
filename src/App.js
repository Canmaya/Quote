import "tailwindcss/tailwind.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Deneme from "./Deneme";
import { Header } from "./Header";
import { QuotePage } from "./QuotePage";
import { Quotes } from "./Quote";
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/quote-page/:quoteId" element={<QuotePage />} />
        <Route path="/deneme" element={<Deneme />} />
      </Routes>
    </div>
  );
}

export default App;
