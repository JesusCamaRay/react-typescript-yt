import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
import { Todo } from './todo-context/Todo';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr/>
      <Counter/>
      <Usuario/>
      <h2>useEffect - useRef</h2>
      <hr/>
      <TimerPadre/>
      <br/>
      <h2>useReducer</h2>
      <hr/>
      <ContadorRed/>
      <br/>
      <h2>Custom Hook</h2>
      <hr/>
      <Form/>
      <Form2/>
      <hr/>
      <Todo/>
    </>
  );
}

export default App;
