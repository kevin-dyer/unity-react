import React, { CSSProperties } from 'react';
import './App.css';
import UnityButton from './components/unity-button-react/UnityButton'
import UnityCodeEditor from './components/unity-code-editor-react/UnityCodeEditor'
import UnityTextInput from './components/unity-text-input-react/UnityTextInput'
import UnityTable from './components/unity-table-react/UnityTable'
import UnityPageHeader from './components/unity-page-header-react/UnityPageHeader'
import UnitySection from './components/unity-section-react/UnitySection'
import UnityGlobalNav from './components/unity-global-nav-react/UnityGlobalNav'

const contentBox: CSSProperties = {
  margin: "20px",
  width: '100%'
}

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  position: 'relative'
}

const mainStyle: CSSProperties = {
  flex: 1,
  position: 'relative'
}

interface NavItem {
  key: string,
  label: string,
  short?: boolean,
  icon?: string,
  children?: NavItem[]
}

interface navConfig {
  top?: NavItem[],
  bottom?: NavItem[]
}

const navItems : navConfig = {
  top: [
    {
      key: 'item-0',
      label: 'Top Item 0',
      short: false,
      icon: 'account-balance',
      children: [
        {
          key: 'item-0-0',
          label: 'Item 0-0',
          icon: 'query-builder'
        },
        {
          key: 'item-0-1',
          label: 'Item 0-1',
          icon: 'font-download'
        },
        {
          key: 'item-0-2',
          label: 'Item 0-2',
          icon: 'gavel'
        },
        {
          key: 'item-0-3',
          label: 'Item 0-3',
          icon: 'motorcycle'
        }
      ]
    },
    {
      key: 'item-1',
      label: 'Top Item 1',
      short: true,
      icon: 'account-circle'
    },
    {
      key: 'item-2',
      label: 'Top Item 2',
      short: false,
      icon: 'add-circle-outline'
    },
    {
      key: 'item-3',
      label: 'Top Item 3',
      short: true,
      icon: 'android',
      children: [
        {
          key: 'item-3-0',
          label: 'Item 3-0',
          icon: 'euro-symbol'
        }
      ]
    },
    {
      key: 'item-4',
      label: 'Top Item 4',
      short: false,
      icon: 'bug-report'
    }
  ],
  bottom: [
    {
      key: 'item-5',
      label: 'Bottom Item 0',
      short: true
    },
    {
      key: 'item-6',
      label: 'Bottom Item 1',
      short: false
    },
    {
      key: 'item-7',
      label: 'Bottom Item 2',
      short: true
    },
    {
      key: 'item-8',
      label: 'Bottom Item 3',
      short: true
    },
    {
      key: 'item-9',
      label: 'Bottom Item 4',
      short: false
    }
  ]
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

        <div className="wrapper" style={wrapperStyle}>
          <UnityGlobalNav
            items={navItems}
            collapsible={true}
          />

          <div className="main" style={mainStyle}>
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

                <UnityTable
                  data={[{name: 'first name', id: 0}]}
                  keyExtractor={(node: any) => node.id}
                  columns={[
                    {
                      key: 'name',
                      renderCustomContent: (cellValue: any) =>
                        <div>Hello {cellValue}!</div>
                    }
                  ]}
                />
              </div>
            </UnitySection>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
