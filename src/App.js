import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register/>} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TvShow />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/movie" element={<MoviePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
