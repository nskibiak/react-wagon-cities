const cityReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'PICK_CITY') {
    return action.payload;
  } else {
    return state;
  }

  // USUAL WAY OF HANDLING ACTION
  // switch(action.type) {
  //   case 'SET_FLATS':
  //     return action.payload;
  //   default:
  //     return state;
  // }
}

export default cityReducer;
