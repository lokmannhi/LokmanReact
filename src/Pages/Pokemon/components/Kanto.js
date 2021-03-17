import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Kanto = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filterByType, setFilterByType] = useState("all");

  useEffect(() => {
    const pokemonList = () =>
      fetch("https://pokeapi.co/api/v2/pokemon?offset=&limit=151")
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
              first_gen: idx <= 151 ? true : false
            };
          });

          setPokemon(reformatData.filter((x) => x.first_gen === true));
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=&limit=151")
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
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"All"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "grass" ? true : false}
          value="grass"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Grass"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "fire" ? true : false}
          value="fire"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Fire"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "water" ? true : false}
          value="water"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Water"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "electric" ? true : false}
          value="electric"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Electric"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "normal" ? true : false}
          value="normal"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Normal"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "ground" ? true : false}
          value="ground"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Ground"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "bug" ? true : false}
          value="bug"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Bug"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "flying" ? true : false}
          value="flying"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Flying"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "ice" ? true : false}
          value="ice"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Ice"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "dragon" ? true : false}
          value="dragon"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Dragon"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "fighting" ? true : false}
          value="fighting"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Fighting"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "ghost" ? true : false}
          value="ghost"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Ghost"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "poison" ? true : false}
          value="poison"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Poison"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "psychic" ? true : false}
          value="psychic"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Psychic"}
        <input
          type="checkbox"
          placeholder="search"
          checked={filterByType === "rock" ? true : false}
          value="rock"
          onChange={(e) => {
            setFilterByType(e.target.value);
            fetchPokemonByType(e.target.value);
          }}
        />
        {"Rock"}
      </div>
      <br />
      <hr />
      <ol className="list">
        {pokemon.map((item) => (
          <li key={item.name}>
            <img src={item.image_url} alt={item.name}></img>
            <Link to={`/pokemon/kanto/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Kanto;
