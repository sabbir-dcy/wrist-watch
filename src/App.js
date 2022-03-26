import './App.css';
import Header from './components/Header/Header';

import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <div className="main">
        <Store></Store>
        <div className="questions">
          <h2 style={{fontWeight: '600'}}>1. How react works?</h2>
          <h3>React works in unidirectional way with a declarative manner.The jsx code we write inside a component that code get transpile into vanilla javascript code through babel transpiler. Then, react creates its own virtual dom. Everytime application gets any update it compare its previous state with current state using diffing algorithm and update it to html dom. This whole proccess is called reconciliation</h3>
          <br />
          <h2 style={{fontWeight: '600'}}>2. How use states works?</h2>
          <h3>Use state is react hook. using use states we can declare state inside a function component. when the component get loaded, react calls the usestate function and initialize the state. While rendering the jsx, use states state sets the initial value to the dom. If states gets updated it also update the value inside the dom.</h3>
        </div>
            </div>
      </div>
  );
}

export default App;
