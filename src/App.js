import React, { useState } from 'react';
import Todos from './Components/Todos';
import AddForm from './Components/AddForm';

function App() {
  const [state, setstate] = useState({
    todos: [
      { id: 1, content: 'I Am Yusuf Abedin' },
      { id: 2, content: 'I Am Fontan Developer' }
    ]
  });

  const deletTodo = id => {
    const todos = state.todos.filter(todo => todo.id !== id);
    setstate({ todos });
  };

  const addTodo = todo => {
    todo.id = Math.random();
    setstate({
      todos: [...state.todos, todo]
    });
  };

  return (
    <div className='todo-app container'>
      <h1 className='center blue-text'>Todo's</h1>
      <Todos todos={state.todos} deletTodo={deletTodo} />
      <AddForm addTodo={addTodo} />
    </div>
  );
}

export default App;
