import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[todo,setTodo]=useState('')
  const[todoList,setTodoList]=useState([])
  const handleClick=()=>{
      setTodoList([...todoList,todo])
      console.log(todoList)
  }

  const deleteTodo=(id)=>{
    setTodoList(todoList.filter((_,index)=>index !=id))
  }
  return (
    <div className="App">
     <input type="text" onChange={(e)=>setTodo(e.target.value)} />
     <button onClick={handleClick}>Add</button>
     <ul>
      {
        todoList.map((val,index)=>(
         <div>
           <span>{val}</span>
           <button style={{marginLeft:"10px"}} onClick={()=>deleteTodo(index)}>Delete</button>
         </div>
        ))
      }
     </ul>
    </div>
  );
}

export default App;
