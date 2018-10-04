import React from 'react';
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state);
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
