export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';

// these are synchronous action creators
export const receiveAllPokemon = pokemon => {
  return {
  type: RECEIVE_ALL_POKEMON,
  pokemon
  };
};

// these are thunk action creators (asynchronous)
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemonRes => dispatch(receiveAllPokemon(pokemonRes)))
);
