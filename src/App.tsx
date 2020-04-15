import React, { CSSProperties } from 'react';
import './App.css';
import UnityButton from './components/unity-button-react/UnityButton'
import UnityCodeEditor from './components/unity-code-editor-react/UnityCodeEditor'
import UnityTextInput from './components/unity-text-input-react/UnityTextInput'
import UnityTable from './components/unity-table-react/UnityTable'
import UnityTypography, { headerStyleTypes } from './components/unity-typography-react/UnityTypography'
import UnityPageHeader from './components/unity-page-header-react/UnityPageHeader'
import UnitySection from './components/unity-section-react/UnitySection'
import UnityGlobalNav from './components/unity-global-nav-react/UnityGlobalNav'
import UnityDropdown from './components/unity-dropdown-react/UnityDropdown'
import UnityToggleSwitch from './components/unity-toggle-switch-react/UnityToggleSwitch'
import UnitySplitPane from './components/unity-split-pane-react/UnitySplitPane'
import UnityModal from './components/unity-modal-react/UnityModal'

const appStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%'
}

const headerStyle: headerStyleTypes  = {
  '--header1-size': '25px'
}

const contentBox: CSSProperties = {
  margin: "20px",
  width: '100%'
}

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  position: 'relative',
  flex: 1,
  minHeight: 0
}

const mainStyle: CSSProperties = {
  flex: 1,
  position: 'relative',
  overflowY: 'auto'
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
const dropdownOptions: Object[] = [
  {
    "label": "Option 1",
    "id": "1"
  },
  {
    "label": "Option 2",
    "id": "2"
  },
  {
    "label": "Option 3",
    "id": "3",
    // "disabled": true
  }
]

class App extends React.Component {
  state = {
    value: '',
    error: '',
    showPane: true,
    showModal: false
  }

  makeCenterContent() {
    return (<div>
        I'm a page header
      </div>)
  }

  render() {
    return (
      <div className="App" style={appStyle}>
        <header className="App-header">
          <UnityTypography style={headerStyle} size='header1' color='light'>Unity React Components</UnityTypography>
        </header>

        <div className="wrapper" style={wrapperStyle}>
          <UnityGlobalNav
            items={navItems}
            collapsible={true}
          />

          <div className="main" style={mainStyle}>
            <UnitySection>
              <div style={contentBox}>
                <UnityPageHeader
                centerContent={this.makeCenterContent()}/>
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
              <UnityModal
                top={<UnityButton centerIcon="unity:close" onClick={() => this.setState({showModal: false})}/>}
                title="Modal title"
                body={<UnityButton label="Unity" type="solid" onClick={() => console.log("click")}/>}
                bottom='this is the bottom'
                show={this.state.showModal}
              />
              </UnitySection>
            <UnitySection>
              <UnitySplitPane
                onResize={()=>console.log("resize")}
                style={{height: '400px', border: '1px solid grey'}}
                onClose={()=> this.setState({showPane: false})}
                closeButton
                collapseButton
                show={this.state.showPane}
                header={<p style={{paddingLeft: '24px'}}>This is the header</p>}
                main="This is the main body"
                footer="This is the footer"
                pane="This is the pane"
              />
            </UnitySection>

            <UnitySection>
              <UnitySection>
                <div style={contentBox}>
                  <UnityTextInput label="Text Input"/>
                </div>
              </UnitySection>

              <UnitySection>
                <div style={contentBox}>
                  <h3>UnityButton and modal</h3>

                  <div>
                    <UnityButton label="Show modal" type="solid" onClick={() => this.setState({showModal: true})}/>
                  </div>
                </div>
              </UnitySection>
            </UnitySection>

            <UnitySection>
              <UnityDropdown
                label={"This is a Dropdown"}
                inputType={"single-select"}
                onValueChange={(...args:any) => console.log('value changed, here are the args', args)}
                options={dropdownOptions}
              ></UnityDropdown>
            </UnitySection>

            <UnitySection>
              <UnityToggleSwitch
                value={true}
                label={"This is a Switch"}
                onLabel={"Right"}
                offLabel={"Left"}
                remark={"Remarkable"}
                onChange={(on : boolean) => console.log(`Switch is ${on ? 'on' : 'off'}`)}
              />
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
