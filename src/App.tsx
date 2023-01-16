import React from "react";
import { Routes, Route } from "react-router";
import { Article, Home } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/news-test/" element={<Home />} />
        <Route path="/news-test/article/:id" element={<Article />} />
      </Routes>
    </div>
  );
};

export default App;
