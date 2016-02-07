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
  // console.log(id);
}
