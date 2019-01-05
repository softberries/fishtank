// @flow
import { INCREMENT_COUNTER } from '../actions/home';
import type { Action } from './types';

const initialState = {
  count: 0,
  dir: []
};


export default function counterHome(state = initialState, action: Action) {
  console.log("reducer home: " + JSON.stringify(action));
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case INCREMENT_COUNTER:
      console.log("updating state");
      return Object.assign({}, state, {
        dir: action.value,
        count: state.count + 1
      });
    default:
      return state;
  }
}
