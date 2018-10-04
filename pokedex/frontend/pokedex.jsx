import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
