import React, { CSSProperties } from 'react';
import './App.css';
import UnityButton from './components/unity-button-react/UnityButton'
import UnityCodeEditor from './components/unity-code-editor-react/UnityCodeEditor'
import UnityTextInput from './components/unity-text-input-react/UnityTextInput'
import UnityTable from './components/unity-table-react/UnityTable'
import UnityPageHeader from './components/unity-page-header-react/UnityPageHeader'
import UnitySection from './components/unity-section-react/UnitySection'


const contentBox: CSSProperties = {
  margin: "20px",
  width: '100%'
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

        <UnitySection>
          <div style={contentBox}>
            <UnityPageHeader title="I'm a page header"/>
          </div>
        </UnitySection>

        <UnitySection>
          <div style={contentBox}>
            <UnityCodeEditor
              label="JSON editor"
              mode="json"
              onChange={(value: string, error: string) => {
                console.log('value', value)
                console.log('error', error)
                this.setState({value, error})
              }}
              value={this.state.value}
              minLines={7}
              maxLines={19}
              validation={(val: string) => {
                try {
                  if (val) JSON.parse(val)
                } catch (error) {
                  return error.toString()
                }
                return ''
              }}
              showError
            />
          </div>
        </UnitySection>

        <UnitySection>
          <UnitySection>
            <div style={contentBox}>
              <UnityTextInput label="Text Input"/>
            </div>
          </UnitySection>

          <UnitySection>
            <div style={contentBox}>
              <h3>UnityButton</h3>

              <div>
                <UnityButton label="Unity" type="solid" onClick={() => console.log("click")}/>
              </div>
            </div>
          </UnitySection>
        </UnitySection>

        <UnitySection>
          <div style={contentBox}>
            <h3>UnityTable</h3>

            <UnityTable/>
          </div>
        </UnitySection>
      </div>
    );
  }
}

export default App;
