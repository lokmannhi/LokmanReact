import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Johto = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filterByType, setFilterByType] = useState("all");

  useEffect(() => {
    const pokemonList = () =>
      fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100")
        .then((res) => res.json())
        .then((data) =>
          setPokemon(
            data.results.map((x, i) => {
              const index = x.url.slice(0, -1).lastIndexOf("/");
              const idx = x.url.substr(index).slice(0, -1);

              return {
                ...x,
                image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`
              };
            })
          )
        )
        .catch((err) => {
          console.log(err);
        });
    pokemonList();
  }, []);

  const fetchPokemonByType = (pokemonType) => {
    if (pokemonType !== "all") {
      fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`)
        .then((res) => res.json())
        .then((data) => {
          const reformatData = data.pokemon.map((x) => {
            const index = x.pokemon.url.slice(0, -1).lastIndexOf("/");
            const idx = x.pokemon.url.substr(index).slice(0, -1).substring(1);

            return {
              name: x.pokemon.name,
              url: x.pokemon.url,
              image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`,
              second_gen: idx > 151 && idx <= 251 ? true : false
            };
          });

          setPokemon(reformatData.filter((x) => x.second_gen === true));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100")
        .then((res) => res.json())
        .then((data) =>
          setPokemon(
            data.results.map((x, i) => {
              const index = x.url.slice(0, -1).lastIndexOf("/");
              const idx = x.url.substr(index).slice(0, -1);

              return {
                ...x,
                image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`
              };
            })
          )
        )
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <hr />
      <div className="header">
        <br />
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "all" ? true : false}
          value="all"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"all"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "grass" ? true : false}
          value="grass"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"grass"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "fire" ? true : false}
          value="fire"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"fire"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "water" ? true : false}
          value="water"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"water"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "ground" ? true : false}
          value="ground"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"ground"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "normal" ? true : false}
          value="normal"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"normal"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "electric" ? true : false}
          value="electric"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"electric"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "bug" ? true : false}
          value="bug"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"bug"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "flying" ? true : false}
          value="flying"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"flying"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "ice" ? true : false}
          value="ice"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"ice"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "dragon" ? true : false}
          value="dragon"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"dragon"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "fighting" ? true : false}
          value="fighting"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"fighting"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "ghost" ? true : false}
          value="ghost"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"ghost"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "poison" ? true : false}
          value="poison"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"poison"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "psychic" ? true : false}
          value="psychic"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"psychic"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "rock" ? true : false}
          value="rock"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"rock"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "dark" ? true : false}
          value="dark"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"dark"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "steel" ? true : false}
          value="steel"
          onChange={(e) => {
            console.log(e.target.value);
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"steel"}
      </div>
      <br />
      <hr />
      <ol className="list">
        {pokemon.map((item) => (
          <li key={item.name} className="pokedex">
            <img src={item.image_url} alt={item.name}></img> <br></br>{" "}
            <Link to={`/pokemon/johto/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Johto;
