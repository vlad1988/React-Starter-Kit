import React from 'react';
import {connect} from 'react-redux';
import {addTodo, receiveTodos} from '../../actions';
import TodoList from './TodoList';

class AddForm extends React.Component {
  render() {
    let input;
    const {dispatch, Todos} = this.props;
    console.log(this.props);
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
          <button onClick={this.uploadTodos.bind(null, dispatch)}>Подгрузи тудуськи</button>
          </div>
        );
      }
      uploadTodos(dispatch){
        // dispatch(receiveTodos('sdsdsd'));
        fetch('/todos.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          dispatch(receiveTodos(json));
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
      }
    }

    function select(state){
      return {
        Todos: state
      }
    }
    AddForm = connect(select)(AddForm)
    export default AddForm
