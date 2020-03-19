import React from 'react';
import './App.css';
import UnityButton from './components/UnityButton/UnityButton'
import UnityTable from './components/UnityTable/UnityTable'


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

        <div>
          <UnityTable
            data={[{name: 'first name', id: 0}]}
            keyExtractor={(node: any, i: number) => node.id}
            columns={[
              {
                key: 'name',
                renderCustomContent: (cellValue: any, node: object) => {
                  return <div>Hello {cellValue}!</div>
                }
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
