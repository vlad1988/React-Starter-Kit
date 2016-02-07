import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions';
import TodoList from './TodoList';

class AddForm extends React.Component {
  render() {
    let input;
    const {dispatch, Todos} = this.props;

    return (
      <div>
        <input ref={node => {
            input = node
          }} />
          <button onClick={()=>{
              dispatch(addTodo(input.value));
              input.value = '';
              console.log(Todos);
            }}>Add</button>

          <TodoList todos={Todos} />

          </div>
        );
      }
      todoClick(id){
        console.log(id);
        // dispatch(completeTodo(id));
      }
    }

    function select(state){
      return {
        Todos: state
      }
    }
    AddForm = connect(select)(AddForm)
    export default AddForm
