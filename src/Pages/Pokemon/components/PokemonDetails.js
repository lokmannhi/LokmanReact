import React, { useState, useEffect } from "react";

const PokemonDetails = ({ match }) => {
  const [test, setTest] = useState({});
  const [pokemon, setPokemon] = useState([]);
  const [pokemonPic, setPokemonPic] = useState();
  const [pokemonType, setPokemonType] = useState();
  const [pokemonStats, setPokemonStats] = useState();
  const [pokemonAbilities, setPokemonAbilities] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(match);
    const fetchPokemon = () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTest(data);
          setPokemon(data.name);
          setPokemonType(data.types);
          setPokemonStats(data.stats);
          setPokemonAbilities(data.abilities);
          setPokemonPic(data.sprites);
          setIsLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });

    fetchPokemon();
  }, [match]); // <-- ni

  if (!isLoading) {
    return <div>is loading... </div>;
  }

  return (
    <div>
      <h1>{test.name}</h1>
      <img src={test.sprites.front_default} alt="" />
      <h3>Types: {test.types[0].type.name}</h3>
      <h3>
        {test.stats[0].stat.name} : {test.stats[0].base_stat}
      </h3>
      <h3>
        {test.stats[1].stat.name} : {test.stats[1].base_stat}
      </h3>
      <h3>
        {test.stats[2].stat.name} : {test.stats[2].base_stat}
      </h3>
      <h3>
        {test.stats[3].stat.name} : {test.stats[3].base_stat}
      </h3>
      <h3>
        {test.stats[4].stat.name} : {test.stats[4].base_stat}
      </h3>
      <h3>
        {test.stats[5].stat.name} : {test.stats[5].base_stat}
      </h3>
      <h3>
        Abilities : {test.abilities[0].ability.name}{" "}
        {/* &{" "}
        {test.abilities[1].ability.name} */}
      </h3>
      {pokemonPic === undefined ? null : (
        <img src={pokemonPic.front_default} alt={pokemon} />
      )}
      <p>{pokemon}</p>
      {pokemonType === undefined ? null : (
        <p>Type : {pokemonType[0].type.name}</p>
      )}
      {pokemonStats === undefined ? null : (
        <p>
          {pokemonStats[0].stat.name} : {pokemonStats[0].base_stat}
        </p>
      )}
      {pokemonStats === undefined ? null : (
        <p>
          {pokemonStats[1].stat.name} : {pokemonStats[1].base_stat}
        </p>
      )}
      {pokemonStats === undefined ? null : (
        <p>
          {pokemonStats[2].stat.name} : {pokemonStats[2].base_stat}
        </p>
      )}
      {pokemonStats === undefined ? null : (
        <p>
          {pokemonStats[3].stat.name} : {pokemonStats[3].base_stat}
        </p>
      )}
      {pokemonStats === undefined ? null : (
        <p>
          {pokemonStats[4].stat.name} : {pokemonStats[4].base_stat}
        </p>
      )}
      {pokemonStats === undefined ? null : (
        <p>
          {pokemonStats[5].stat.name} : {pokemonStats[5].base_stat}
        </p>
      )}
      {pokemonAbilities === undefined ? null : (
        <p>
          Ability : {pokemonAbilities[0].ability.name}{" "}
          {/* &{" "}
          {pokemonAbilities[1].ability.name} */}
        </p>
      )}
    </div>
  );
};

export default PokemonDetails;
