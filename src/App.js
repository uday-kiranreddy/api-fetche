import React from "react";
import Nav from "./Nav";
import Details from "./Details";
import Home from './Home';
import Item from './Item';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route path="/Details" exact element={<Details/>} />
        <Route path="/Details/:id" element={<Item/>} />
      </Routes>
    </Router>
  );
}



export default App;
