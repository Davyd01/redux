import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from './todosSlice';

const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', borderRadius: '8px' }}>
      <h1>TODO</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите задачу"
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button onClick={handleAddTodo} style={{ marginLeft: '10px', padding: '10px 20px' }}>
          Добавить
        </button>
      </div>
      <h2>TODOs</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ background: '#fbe7c6', margin: '5px 0', padding: '10px', borderRadius: '4px' }}>
            {todo}
          </li>
        ))}
      </ul>
      <p>Всего: {todos.length}</p>
    </div>
  );
};

export default Todos;
