import React from "react";
import { Link } from "react-router-dom";
import { trimUrl } from "../Functions/UsefulFunctions";

const Pokemons = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map((pokemon) => {
        console.log(trimUrl(pokemon.url));
        return (
          <Link key={pokemon.name} className="link" to={trimUrl(pokemon.url)}>
            <div className="pokemonRow">
              <h3>{pokemon.name}</h3>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Pokemons;
