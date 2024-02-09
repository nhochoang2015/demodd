
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, double, clear } from "./actions/counter";
import { addTodo } from './actions/todo';
import { useRef } from 'react';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const todo = useSelector((state)=> state.todo);
   const inputValue = useRef(null);

  return (
    <div className="App">
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      <button onClick={() => dispatch(double(2))}>X2 counter</button>
      <button onClick={() => dispatch(clear())}>Clear</button>
    </div>
    <div>
      <h1>Input your todo</h1>
      <input ref={inputValue} type="text" placeholder='to do'id='input'/>
      <button onClick={() => dispatch(addTodo(inputValue.current.value))}>Add</button>
      <button onClick={() => dispatch()}>Remove</button>
      <ul>
        <li>{todo.list}</li>
      </ul>
    </div>
    </div>
  );
}

export default App;
