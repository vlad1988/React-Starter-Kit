function retrieve(state, action) {
  switch (action.type) {
    case 'COMPLETE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !action.completed
      }
    default:
      return state
  }
}


const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ];
    break;
    case 'COMPLETE_TODO':
      return state.map(t =>
        retrieve(t, action)
      )
    default:
    return state;

  }
}

export default todo
