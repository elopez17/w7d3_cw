import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const pokemonItems = this.props.pokemon.map(el => (
      <PokemonIndexItem key={el.id}  pokemon={el} />
    ));
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
