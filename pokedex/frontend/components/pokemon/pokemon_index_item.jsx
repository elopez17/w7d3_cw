import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  const path = `/pokemon/${pokemon.id}`;
  return (
    <li>
      <Link to={path}>
        {pokemon.name}<img src={pokemon.image_url} height="35" width="35"></img>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
