let nextTodoId = 0;
export const addTodo = (text)=>{
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
}

export const completeTodo = (id, completed) => {
  return {
    type: 'COMPLETE_TODO',
    id,
    completed
  };
}

export const receiveTodos = (id) => {
  return {
    type: 'RECEIVE_TODOS',
    id
  };
}
