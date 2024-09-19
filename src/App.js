import logo from './logo.svg';
import './App.css';
import { IoAccessibility } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-slate-200'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <IoAccessibility/>
        </a>
      </header>
    </div>
  );
}

export default App;
