import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { News } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
