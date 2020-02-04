import React from 'react';
import logo from './logo.svg';
import './App.css';
import UnityButton from './components/UnityButton/UnityButton'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Unity React Components</h2>
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
