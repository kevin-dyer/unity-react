import React from 'react';
import logo from './logo.svg';
import './App.css';
import UnityButton from './components/UnityButton/UnityButton'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h3>UnityButton</h3>

        <div>
          <UnityButton label="Unity" gradient={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
