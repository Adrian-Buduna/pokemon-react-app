import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemons } from "./Pokemons";
import { Pokemon } from "./Pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=300&offset=0").then(
      (response) => response.json().then((data) => setPokemons(data.results))
    );
  }, []);
  // console.log(pokemons);
  return (
    <BrowserRouter>
      <div className="appContainer">
        <h1>Pokemon react App</h1>
        <Pokemons />
        <Routes>
          <Route path="/" element={<Pokemons pokemons={pokemons} />} />
          <Route path="/:id" element={<Pokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
