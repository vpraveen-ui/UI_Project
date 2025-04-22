import './App.css';
import { useReducer, useState } from 'react';

// Reducer function to handle state changes
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, dispatch] = useReducer(reducer, []);

  const handleClick = () => {
    if (todo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: todo });
      setTodo(''); // clear input after adding
    }
  };

  const deleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>

      <ul style={{ padding: 0 }}>
        {todoList.map((val, index) => (
          <div key={index}>
            <span>{val}</span>
            <button style={{ marginLeft: '10px' }} onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
