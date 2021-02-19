import React, { CSSProperties } from 'react';
import './App.css';
import {
  UnityButton,
  UnityCard,
  UnityCodeEditor,
  UnityGlobalNav, NavItemsConfigI,
  CodeEditorStylesI,
  UnityHistogram,
  histData,
  UnityJsonViewer,
  UnityTextInput,
  // UnityTable,
  UnityTableExport,
  UnityTag,
  UnityTypography,
  headerStyleTypes,
  UnityPageHeader,
  UnitySection,
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
  addNotification,
  UnityNotificationsModal,
  UnityNotificationsSplitPane,
  UnityColumnEditor,
  UnityPopover,
  UnitySearchBar,
  UnityCheckbox,
  UnityStepper,
  UnitySelectMenu,
  NavStyles
} from './components/unity-core-react'
import UnityTable from '../src/components/unity-table-react/UnityTable'
import { devices, fakeYaml, selectMenuItems } from './fakeData'
import moment from 'moment'

const appStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%'
}

const globalNavStyle: NavStyles = {
  '--global-nav-background-color': '#2dccd3'
}

const headerStyle: headerStyleTypes  = {
  '--header1-size': '25px'
}

const contentBox: CSSProperties = {
  margin: "20px",
  width: '100%',
  overflow: 'visible'
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

const notificationSectionStyle: NotificationStylesI = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 10,
  boxShadow: '0 0 5px 1px rgba(0,0,0,0.1)',
  height: '250px',
  '--notification-width': '350px',
  overflow: 'hidden'
}

const modalStyle: CSSProperties = {

}

const splitPaneHeaderStyle: CSSProperties = {
  paddingLeft: 24,
  width: '100%',
  border: '1px solid black'
}

const splitPaneContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: 40
}

const buttonContainerStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}

const jsonViewerStyle: CodeEditorStylesI = {
  '--gutter-color': '#FFF',
  '--fold-color': '#FFF'
}


const navItems : NavItemsConfigI = {
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

const tagSeed: Object[] = [
  { value: "tag 1" },
  {
    label: "Tag 2",
    value: "tag 2"
  },
  {
    value: "tag green",
    styles: { "--tag-color": "green" }
  }
]



const histSeed: histData[] = []

for(let i = 0; i < 100; i++) {
  const timestamp = moment(Date.now() - 100 * 1000 + i * 1000).format()
  histSeed.push({
    timestamp,
    value: Number(Math.random().toFixed(2))
  })
}

const SectionForNotifications = (props?: any) => {
  const {
    addNotification=()=>console.log(`no add notification function!`),
    text
  } = props

  return (
    <UnitySection style={{ height: '100%' }}>
      <div style={buttonContainerStyle}>
        <UnityButton
          type='primary'
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
      {!!text && <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginRight: 40
      }}>
        <UnityTypography>{text}</UnityTypography>
      </div>}
    </UnitySection>
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
    selectedNavItem: '',
    value: '',
    error: '',
    showPane: true,
    showNotificationSplitPane: true,
    showModal: false,
    showNotificationModal: false,
    fileName: '',
    fileType: '',
    fileContent: '',
    selection: [],
    tableSearchText: '',
    dropdownOptions,
    dropdownDisabled: false,
    yamlValue: fakeYaml,
    yamlError: '',
    showPopover: false,
    showColumnEditor: false,
    fakeHistData: [...histSeed],
    streamHistData: false
  }

  popoverButtonRef = React.createRef<HTMLDivElement>()

  private histInterval?: ReturnType<typeof setTimeout>
  private histUpdateCount: number = 0


  componentWillUnmount() {
    clearInterval(this.histInterval!)
  }

  handleSelectNavItem(key: string)  {
    console.log(`Menu item ${key} clicked`)
    this.setState({ selectedNavItem: key })
  }

  makeCenterContent() {
    return (<div>
        I'm a page header
      </div>)
  }

  setFile = async (file: any) => {
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

  toggleColumnEditor = (show: any) => {
    this.setState({
      showColumnEditor: typeof show === 'boolean' ? show : !this.state.showColumnEditor
    })
  }

  updateTableSearchText = (val: String) => this.setState({ tableSearchText: val })

  //simulate real time histogram data
  startHistStream = () => {
    this.histInterval = setInterval(() => {
      const timestamp = moment().format()
      this.setState({
        fakeHistData: [
          ...this.state.fakeHistData,
          {
            timestamp,
            value: Math.random().toFixed(2)
          }
        ]
      })

      //limit number of updates
      if (this.histUpdateCount++ > 50) {
        console.log("Stopping Histogram updates. Refresh page to see update animations.")
        clearInterval(this.histInterval!)
      }
    }, 3000)
  }

  toggleHistogramStream = () => {
    const {streamHistData} = this.state
    this.setState({
      streamHistData: !streamHistData
    })

    if (streamHistData) {
      clearInterval(this.histInterval!)
    } else {
      this.startHistStream()
    }
  }

  renderPopover = () => (
    <div style={{ paddingTop: 10 }}>
      <UnityTypography size='header1'>{'Popover!'}</UnityTypography>
      <UnityTypography size='paragraph'>{'Look at all the cool stuff you can put in a Popover.'}</UnityTypography>
      <UnityTextInput placeholder={'Type here!'}></UnityTextInput>
      <UnityButton label={'Button!'}></UnityButton>
    </div>
  )

  render() {
    const {
      selectedNavItem,
      selection,
      showModal,
      showNotificationModal,
      dropdownOptions,
      dropdownDisabled,
      showPopover,
      showColumnEditor,
      fakeHistData,
      streamHistData,
      tableSearchText
    } = this.state
    const { data, columns, childKeys } = devices

    return (
      <div className="App" style={appStyle}>
        <div
          className="modal-container"
          style={{
            backgroundColor: 'rgba(105, 105, 105, 0.4)',
            zIndex: 5,
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: (showModal || showNotificationModal) ? 'block' : 'none'
          }}
        >
          <UnityModal
            top={<UnityButton centerIcon="unity:close" onClick={() => this.setState({ showModal: false })}/>}
            title="Modal title"
            body={<div style={{ padding: '100px 300px' }}>
              <UnityButton
                label="Unity"
                type="primary"
                onClick={() => console.log("click")}
              />
           </div> }
            bottom='this is the bottom'
            show={this.state.showModal}
            style={modalStyle}
          />
          <UnityNotificationsModal
            top={<UnityButton centerIcon="unity:close" onClick={() => this.setState({ showNotificationModal: false })}/>}
            title="A Notification-Enabled Modal"
            body={<div style={{ padding: '100px 300px' }}>
              <UnityButton
                label="Show a Notification"
                type="primary"
                onClick={() => addNotification({
                  target: 'notifications-in-modal',
                  notification: {
                    text: 'Check it out',
                    subtext: 'This notification is scoped to the modal',
                    type: 'tip'
                  }
                })}/>
            </div>}
            show={this.state.showNotificationModal}
            notifications={{
              target: 'notifications-in-modal'
            }}
            style={modalStyle}
          />
        </div>
        <div
          className="content-container"
          style={(showModal || showNotificationModal) ? { pointerEvents:  'none' } : {}}
        >
          <header className="App-header">
            <UnityTypography style={headerStyle} size='header1' color='light'>Unity React Components</UnityTypography>
          </header>

          <div className="wrapper" style={wrapperStyle}>
            <UnityGlobalNav
              items={navItems}
              collapsible
              grid
              header='ProductName'
              onSelect={this.handleSelectNavItem.bind(this)}
              selected={selectedNavItem}
              onToggleCollapse={collapsed => console.log("onToggleCollapse ", {collapsed})}
              style={globalNavStyle}
            />
            <div className="main" style={mainStyle}>
              <UnitySection>
                <div style={contentBox}>
                  <UnityPageHeader
                    centerContent={this.makeCenterContent()}
                    leftAction={<UnityButton centerIcon="unity:db_candi" type="borderless"/>}
                    rightAction={<UnityButton label="Header Button"/>}
                  />
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

                <UnityTypography>Embedded YAML editor</UnityTypography>

                <div style={{...contentBox, height: 400, border: '1px solid blue'}}>

                  <UnityCodeEditor
                    label="YAML editor"
                    mode="yaml"
                    onChange={(value: string, error: string) => {
                      this.setState({yamlValue: value, yamlError: error})
                    }}
                    value={this.state.yamlValue}
                    flexibleHeight
                    error='Example error'
                    embedded
                    dirty
                  />
                </div>
                <div style={contentBox}>
                  <UnityTypography>JSON Viewer</UnityTypography>
                  <UnityJsonViewer
                    src={JSON.stringify(navItems)}
                    style={jsonViewerStyle}
                  />
                </div>
              </UnitySection>
              <UnitySection>
                <UnitySplitPane
                  onResize={(params: any)=>console.log("resize params: ", params)}
                  style={{ height: 400, border: '1px solid grey', margin: 20 }}
                  onClose={()=> this.setState({ showPane: false })}
                  closeButton
                  collapseButton
                  show={this.state.showPane}
                  header={<div style={splitPaneHeaderStyle}>This is the header</div>}
                  main={
                  <div
                    style={splitPaneContainerStyle}
                  >
                    <UnityButton
                      label="Toggle Split Pane"
                      type="primary"
                      onClick={() => this.setState({ showPane: !this.state.showPane})}
                    />
                  </div>
                  }
                  footer={<div style={splitPaneHeaderStyle}>This is the footer</div>}
                  pane={<div style={splitPaneContainerStyle}>This is the pane content</div>}
                />
                <UnityNotificationsSplitPane
                  mainNotifications={{ target: 'split-pane-main-notification'}}
                  paneNotifications={{ target: 'split-pane-pane-notification'}}
                  style={{height: 400, border: '1px solid grey', margin: 20}}
                  onClose={()=> this.setState({ showNotificationSplitPane: false })}
                  closeButton
                  collapseButton
                  show={this.state.showNotificationSplitPane}
                  header={<div style={splitPaneHeaderStyle}>This is a Notification-Enabled Split Pane</div>}
                  main={(
                    <div
                      style={splitPaneContainerStyle}
                    >
                      <UnityButton
                        label="show success notification"
                        type="primary"
                        onClick={() => addNotification({
                          target: 'split-pane-main-notification',
                          notification: {
                            text: 'Hooray',
                            subtext: 'this is a success notification',
                            type: 'success'
                          }
                        })}
                        style={{ margin: 20 }}
                      />
                      <UnityButton
                        label="Toggle Split Pane"
                        type="primary"
                        onClick={() => this.setState({ showNotificationSplitPane: !this.state.showNotificationSplitPane})}
                        style={{ margin: 20 }}
                      />
                    </div>
                  )}
                  pane={(
                    <div
                      style={splitPaneContainerStyle}
                    >
                      <UnityButton
                        label="show warning notification"
                        type="primary"
                        onClick={() => addNotification({
                          target: 'split-pane-pane-notification',
                          notification: {
                            text: 'Look  out',
                            subtext: 'this is a warning notification',
                            type: 'warning'
                          }
                        })}
                      />
                    </div>
                  )}
                />
              </UnitySection>
              <UnitySection>
                <UnitySection>
                  <div style={contentBox}>
                    <UnityTextInput label="Text Input"/>
                  </div>
                  <div style={contentBox}>
                    <UnitySearchBar
                      tagSeed={tagSeed}
                      onChange={(v: any) => console.log('search updated', v)}
                      style={{"--input-border-radius": "30px"}}
                    ></UnitySearchBar>
                  </div>
                </UnitySection>
                <UnitySection>
                  <div style={contentBox}>
                    <h3>UnityButton and modal</h3>
                    <div>
                      <UnityButton
                        label="Show Standard Modal"
                        type="primary"
                        onClick={() => this.setState({showModal: true})}
                        style={{ margin: 20 }}
                      />
                      <UnityButton
                        label="Show Notifications-Enabled Modal"
                        type="primary"
                        onClick={() => this.setState({showNotificationModal: true})}
                        style={{ margin: 20 }}
                      />
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
                  <UnitySelectMenu
                    label={"This is a Select Menu"}
                    onMenuClick={(...args:any) => console.log(`Menu item clicked: `, args)}
                    items={selectMenuItems}
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
                  <UnityCheckbox
                    indeterminate
                    label="Checkbox"
                  />
                  <UnityCheckbox
                    checked
                    disabled
                    label="Disabled"
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
                <UnityTag
                  withClose
                  label={"This is a Tag"}
                  value={"This is the value"}
                  onClick={(e, v)=>console.log('tag clicked with value: ', v, e)}
                  onClose={(e, v)=>console.log('tag closed with value: ', v, e)}
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

              <UnitySection>
                <WithNotificationsWrappedSection
                  text={'This text is being passed to the wrapped component as a prop.'}
                />
                <UnitySection style={notificationSectionStyle}>
                  <UnityNotificationsHandler
                    target='notifications-via-component'
                    allowDuplicates={true}
                    position={'top-right'}
                    style={{ height: '100%', width: '100%'}}
                  >
                    <div style={buttonContainerStyle}>
                      <UnityButton
                        type='primary'
                        label='Add Notification'
                        onClick={() => addNotification({
                          target: 'notifications-via-component',
                          notification: {
                            type: 'help',
                            text: 'What a helpful Notification'
                          },
                          timeout: 0
                        })}
                      />
                    </div>
                  </UnityNotificationsHandler>
                </UnitySection>
              </UnitySection>

              <UnitySection style={notificationSectionStyle}>
                <div style={buttonContainerStyle}>
                  <div id='popover-button-container' ref={this.popoverButtonRef}>
                    <UnityButton
                      label={`${!showPopover ? 'Open' : 'Close'} Popover`}
                      onClick={() => this.setState({ showPopover: !showPopover })}
                    />
                    <UnityPopover
                      show={showPopover}
                      popoverContent={this.renderPopover()}
                      onClose={() => this.setState({ showPopover: !showPopover })}
                      distance={10}
                      withClose
                      flip
                      preventOverflow
                    />
                  </div>
                </div>
              </UnitySection>

              <UnitySection style={{height: "1000px", overflow: 'scroll', "--vert-pos": "top"}}>
                <div style={{...contentBox, display: "flex", flexDirection: "column"}}>
                    <UnitySection style={{
                      '--horz-pos': 'space-between',
                      '--vert-pos': 'flex-end',
                      flex: 0
                    }}>
                      <h3>UnityTable</h3>
                      <UnityDropdown
                        label='Manually Change Selection'
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
                        style={{
                          marginLeft: '44px',
                          '--dropdown-width': '320px'
                        }}
                      />
                      <div style={{ width: '320px' }}>
                        <UnitySearchBar
                          search={tableSearchText}
                          onChange={({ text }: { text: String }) => {
                            console.log("🚀 ~ file: App.tsx ~ line 881 ~ App ~ render ~ tableSearchText", text)
                            this.updateTableSearchText(text)
                          }}
                        />
                      </div>
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
                            type="primary"
                            label="Export"
                            rightIcon="unity:file_download"
                            onClick={() => console.log(`UnityButton child on UnityTableExport received click event`)}
                          />
                        </UnityTableExport>
                      }
                    </UnitySection>
                    <UnitySection style={{ alignItems: 'baseline' }}>
                      <div>
                        <UnityTable
                          ref={this.tableRef}
                          data={data}
                          columns={columns}
                          childKeys={childKeys}
                          selected={selection}
                          keyExtractor={(node: any) => node.id}
                          selectable
                          filter={tableSearchText}
                          onSelectionChange={(selection: []) => console.log(`new selection:`, selection)}
                          rightActionsContent={<UnityButton
                            centerIcon="icons:settings"
                            type="borderless"
                            onClick={this.toggleColumnEditor}
                          />}
                        />
                        <UnityColumnEditor
                          columns={columns}
                          modalOnly={true}
                          show={showColumnEditor}
                          onClose={() => this.toggleColumnEditor(false)}
                        />
                      </div>
                    </UnitySection>
                </div>
              </UnitySection>
              <UnitySection>
                <UnityStepper
                  steps={['Step 1', {name:'Step2', buttonText:'Authorize'}, {name:'Step 3',key:'test'}]}
                  totalSteps={4}
                  valid
                  backtrack
                  onChangeStep={(step:any) => console.log('step', step)}
                />
              </UnitySection>

              <UnitySection>
                <div style={{flex: 1}}>
                  <div style={{flex: 1, display: 'flex', height: 250}}>
                    <UnityHistogram
                      data={fakeHistData.slice(-100)}
                      tooltipFormatter={(params: any) => `${moment(params['value'][0]).fromNow()}: ${Math.round(params['value'][1] * 100)}% CPU`}
                    />
                  </div>
                  <UnityButton
                    onClick={this.toggleHistogramStream}
                    label={!streamHistData ? "Start Streaming" : "Stop Streaming"}
                  />
                </div>
              </UnitySection>

              <UnitySection>
                <UnityCard
                  title="Test Card"
                />
              </UnitySection>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
