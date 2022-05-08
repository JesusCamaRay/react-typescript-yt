import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

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
    </>
  );
}

export default App;
