import React, { CSSProperties } from 'react';
import './App.css';
import UnityButton from './components/unity-button-react/UnityButton'
import UnityCodeEditor from './components/unity-code-editor-react/UnityCodeEditor'
import UnityTextInput from './components/unity-text-input-react/UnityTextInput'
import UnityTable from './components/unity-table-react/UnityTable'
import UnityPageHeader from './components/unity-page-header-react/UnityPageHeader'


const codeEditorStyle: CSSProperties = {
  margin: "20px",
}

class App extends React.Component {
  state = {
    value: '',
    error: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Unity React Components</h2>
        </header>

        <div>
          <h3>UnityButton</h3>

          <div>
            <UnityButton label="Unity" type="solid" onClick={() => console.log("click")}/>
          </div>
        </div>

        <div style={codeEditorStyle} >
          <UnityCodeEditor
            label="JSON editor"
            mode="json"
            onChange={(e: Event, value: string, error: string) => {
              console.log(JSON.stringify(e))
              console.log('value', value)
              console.log('error', error)
              this.setState({value, error})
            }}
            value={this.state.value}
            minLines={7}
            maxLines={19}
          />
        </div>

        <div>
          <UnityTextInput label="Text Input"/>
        </div>

        <div>
          <UnityPageHeader title="I'm a page header"/>
        </div>

        <div>
          <h3>UnityTable</h3>

          <UnityTable/>
        </div>
      </div>
    );
  }
}

export default App;
