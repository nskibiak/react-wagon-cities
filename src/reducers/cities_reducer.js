const CitiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'LIST_CITIES') {
    return action.payload;
  } else {
    return state;
  }

}

export default CitiesReducer;
