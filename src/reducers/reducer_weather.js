import FETCH_WEATHER from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]); //will not mutate state creates a new array similar to [action.payload.data, ...state]
  }
  return state;
}
