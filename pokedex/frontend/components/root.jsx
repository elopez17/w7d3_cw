import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonIndexItem from './pokemon/pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/pokemon/:pokemonId" component={PokemonIndexItem} />
        <Route path="/" component={PokemonIndexContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
