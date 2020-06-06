import React, { CSSProperties } from 'react';
import './App.css';
import {
  UnityButton,
  UnityCodeEditor,
  UnityJsonViewer,
  UnityTextInput,
  UnityTable,
  UnityTableExport,
  UnityTypography,
  headerStyleTypes,
  UnityPageHeader,
  UnitySection,
  UnityGlobalNav,
  UnityDropdown,
  UnityToggleSwitch,
  UnitySplitPane,
  UnityModal,
  UnityProgress,
  UnityDropzone,
  UnityNotification,
  NotificationStylesI,
  UnityNotificationsHandler,
  withNotifications,
  addNotification
} from './components/unity-core-react'

import { devices } from './fakeData'

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

const notificationSectionContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: 500
}

const notificationSectionStyle: NotificationStylesI = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 10,
  boxShadow: '0 0 5px 1px rgba(0,0,0,0.1)',
  height: '100%',
  alignItems: 'center'
}

const buttonContainerStyle: CSSProperties = {
  width: '32%',
  margin: '180px auto',
  padding: 20,
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

const SectionForNotifications = (props?: any) => {
  const {
    addNotification=()=>console.log(`no add notification function!`),
    text
  } = props

  return (
    <div>
      <div style={buttonContainerStyle}>
        <UnityButton
          type='solid'
          label='Add Notification'
          onClick={() => addNotification({
            notification: {
              type: 'tip',
              text: 'Check out this cool Notification',
              timeout: 0
            }
          })
          }
        />
      </div>
      {!!text &&
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <UnityTypography>{text}</UnityTypography>
      </div>
      }
    </div>
  )
}

const WithNotificationsWrappedSection = withNotifications({
  position: 'top-left',
  allowDuplicates: true,
  style: notificationSectionStyle
})(SectionForNotifications)


class App extends React.Component {

  private tableRef = React.createRef<UnityTable>()

  state = {
    value: '',
    error: '',
    showPane: true,
    showModal: false,
    fileName: '',
    fileType: '',
    fileContent: '',
    selection: [],
    dropdownOptions,
    dropdownDisabled: false
  }

  makeCenterContent() {
    return (<div>
        I'm a page header
      </div>)
  }

  setFile = async (file:any) => {
    console.log('setting file with', file)
    this.setState({
      fileName: file.name,
      fileType: file.type,
      fileContent: await file.text()
    })
  }

  clearFile = () => {
    this.setState({
      fileName: '',
      fileType: '',
      fileContent: ''
    })
  }

  render() {
    const { selection, dropdownOptions, dropdownDisabled } = this.state
    const { data, columns, childKeys } = devices
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
              <UnityProgress
                label="Unity Progress"
                remark="Indeterminate"
                style={{width:'400px', margin: "20px", "--progress-color": "var(--secondary-brand-color)", "--progress-indeterminate-cycle-duration": "4s"}}
                indeterminate
              />
              <UnityProgress
                label="Unity Progress"
                remark="Controlled"
                max={100}
                value={30}
                secondaryValue={80}
                completionType="percentage"
                style={{width:'400px', margin: "20px"}}
              />
            </UnitySection>
            <UnitySection>
              <div style={contentBox}>
                <UnityCodeEditor
                  label="JSON editor"
                  mode="json"
                  onChange={(value: string, error: string) => {
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

              <div style={contentBox}>
                <UnityTypography>JSON Viewer</UnityTypography>
                <UnityJsonViewer
                  src={JSON.stringify(navItems)}
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
              <UnitySection>
                <UnityDropdown
                  label={"This is a Dropdown"}
                  inputType={"single-select"}
                  onValueChange={(...args:any) => console.log('value changed, here are the args', args)}
                  options={dropdownOptions}
                  disabled={dropdownDisabled}
                />
                <UnityToggleSwitch
                  value={!dropdownDisabled}
                  label={"Disabled"}
                  onChange={(on : boolean) => this.setState({ dropdownDisabled: !on })}
                />
                <UnityButton
                  onClick={() => {
                    const willAdd = (Math.random() > .5) || dropdownOptions.length === 0
                    let newDropdownOptions = [...dropdownOptions]
                    if (willAdd) {
                      newDropdownOptions.push({
                        id: dropdownOptions.length + 1,
                        label: `New Option ${dropdownOptions.length + 1}`
                      })
                    } else {
                      newDropdownOptions.pop()
                    }
                    this.setState({ dropdownOptions: newDropdownOptions })
                  }}
                  label={"Add/Remove Item"}
                />
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
                <UnityNotification style={{margin: '10px'}} text='Notification text' icon='unity:share' subtext='More text'/>
              </UnitySection>
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
              <UnitySection>
                <UnityDropzone
                  accept={"application/json"}
                  onUpload={this.setFile}
                />
                <UnityButton
                  onClick={this.clearFile}
                  label={"Clear File"}
                  disabled={!this.state.fileContent}
                />
              </UnitySection>
              <UnitySection>
                <div>
                  <div>
                    File Name: {this.state.fileName}
                  </div>
                  <div>
                    File Type: {this.state.fileType}
                  </div>
                  <div>
                    File Content: {this.state.fileContent}
                  </div>
                </div>
              </UnitySection>
            </UnitySection>
            <UnitySection style={{height: "500px", "--vert-pos": "top"}}>
              <div style={{...contentBox, display: "flex", flexDirection: "column"}}>
                  <UnitySection style={{flex: 0}}>
                    <h3>UnityTable</h3>
                    <UnitySection style={{"--horz-pos": "right"}}>
                      <UnityDropdown
                        label='Change Selection'
                        inputType='multi-select'
                        placeholder='Pick some'
                        options={[
                          {
                            label: 'Africa',
                            id: 'africa'
                          },
                          {
                            label: 'Asia',
                            id: 'asia'
                          },
                          {
                            label: 'Australia',
                            id: 'australia'
                          },
                          {
                            label: 'Europe',
                            id: 'europe'
                          },
                        ]}
                        onValueChange={(selectedElements: string[], selected: boolean) => {
                          const newSelection: string[] = [...this.state.selection]
                          selectedElements.forEach((element: string) => {
                            if (selected) {
                              newSelection.push(element)
                              return
                            }
                            if (newSelection.includes(element)) {
                              newSelection.splice(newSelection.indexOf(element), 1)
                            }
                          })
                          this.setState({ selection: newSelection })
                        }}
                        showTags
                      />
                      {!!this.tableRef && !!this.tableRef.current &&
                        <UnityTableExport
                          style={{margin: "4px", alignSelf: "flex-end", marginLeft: 40}}
                          tableRef={this.tableRef.current.tableRef}
                          beforeExport={(data: object) => {
                            console.log(`processing data: `, data);
                            return data
                          }}
                          onExport={() => console.log(`Exported table data`)}
                        >
                          <UnityButton
                            type="solid"
                            label="Export"
                            rightIcon="unity:file_download"
                            onClick={() => console.log(`UnityButton child on UnityTableExport received click event`)}
                          />
                        </UnityTableExport>
                      }
                    </UnitySection>
                  </UnitySection>
                {console.log('columns', columns)}
                <UnityTable
                  ref={this.tableRef}
                  data={data}
                  columns={columns}
                  childKeys={childKeys}
                  selected={selection}
                  keyExtractor={(node: any) => node.id}
                  selectable
                  onSelectionChange={(selection: []) => console.log(`new selection:`, selection)}
                />
              </div>
            </UnitySection>
            <div
              style={notificationSectionContainerStyle}
            >
              <WithNotificationsWrappedSection
                text={'This text is being passed to the wrapped component as a prop.'}
              />
              <UnityNotificationsHandler
                name='notifications-via-component'
                allowDuplicates={true}
                position={'top-left'}
                style={notificationSectionStyle}
              >
                <div style={buttonContainerStyle}>
                  <UnityButton
                    type='solid'
                    label='Add Notification'
                    onClick={() => addNotification({
                      name: 'notifications-via-component',
                      notification: {
                        type: 'help',
                        text: 'What a helpful Notification'
                      },
                      timeout: 0
                    })}
                  />
                </div>
              </UnityNotificationsHandler>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
