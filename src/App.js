import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    setTodoList([...todoList, inputValue])
    console.log("hi", todoList)
  }
  return (
    <main>
      <input type="text" onChange={(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
