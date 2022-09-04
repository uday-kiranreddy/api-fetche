import React from "react";
import Details from "./Details";
import Item from './Item';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Details/>} />
        <Route path="/Details/:id" element={<Item/>} />
      </Routes>
    </Router>
  );
}



export default App;
