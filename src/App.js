import React from "react";
//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./components/Home";

//styles
import { GlobalStyle } from "./GlobalStyle";
import Movie from "./Movie";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:movieId"} element={<Movie />} />
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
