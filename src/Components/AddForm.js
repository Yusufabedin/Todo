import React, { useState } from 'react';

const AddForm = ({ addTodo }) => {
  const [state, setstate] = useState({
    content: ' '
  });
  const onChangeHandeler = e => {
    setstate({
      content: e.target.value
    });
  };
  const onSubmitHandaler = e => {
    e.preventDefault();
    addTodo(state);
    setstate({
      content: ''
    });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandaler}>
        <label>Add new todo:</label>
        <input type='text' onChange={onChangeHandeler} value={state.content} />
      </form>
    </div>
  );
};

export default AddForm;
