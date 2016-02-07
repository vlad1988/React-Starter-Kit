import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../../actions';


class TodoList extends Component {
  render() {
    const {dispatch} = this.props;

    return (

// onClick={this.todoClick.bind(this, t.id)}
      <ul>
        {this.props.todos.todo.map((t)=>{
          return <li key={t.id}>{t.id} - {t.text} <button onClick={() => {dispatch(completeTodo(t.id, t.completed))}}>{(t.completed ? <div>Completed</div> : <div>Not finished</div>)}</button></li>;
        })}
      </ul>

    );
  }
}


TodoList = connect()(TodoList)
export default TodoList
