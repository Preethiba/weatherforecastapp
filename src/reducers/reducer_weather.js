export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return [...state, action.payload];
  }
  return state;
}
