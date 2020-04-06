const selectedCityReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'PICK_CITY') {
    return action.payload;
  } else {
    return state;
  }

}

export default cityReducer;
