const goals = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
    console.log(state);
    return Object.assign({}, state, {
      goals: action.id
    });
    default:
    return state;

  }
}

export default goals
