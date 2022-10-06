import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { takeAbilitisOfPokemon } from "../Functions/UsefulFunctions";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon" + location.pathname).then(
      (response) => response.json().then((data) => setPokemon(data))
    );
  }, [location.pathname]);

  const pokemonAbilitis = takeAbilitisOfPokemon(pokemon);

  console.log(pokemon);

  return (
    <div>
      <button className="backButton" onClick={() => navigate("/")}>
        Back
      </button>
      <h1>{pokemon?.name}</h1>
      <div className="imageContainer">
        <img
          alt={pokemon?.name}
          src={pokemon?.sprites.other.dream_world.front_default}
        />
      </div>
      <div className="abilitisContainer">
        <h2>Abilities:</h2>
        {pokemonAbilitis.map((ability)=>(
          <p className="ability">{ability}</p>
        ))}
      </div>
      <div className="buttonsContainer">
        {pokemon?.id < 300 && (
          <button
            className="pokemonButton"
            onClick={() => navigate("/" + (pokemon?.id + 1))}
          >
            Next
          </button>
        )}
        {pokemon?.id > 1 && (
          <button
            className="pokemonButton"
            onClick={() => navigate("/" + (pokemon?.id - 1))}
          >
            Prev
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
