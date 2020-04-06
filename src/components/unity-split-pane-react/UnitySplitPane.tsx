import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-split-pane'

export default class UnitySplitPane extends Component<SplitPaneProps> {

  private splitPaneRef = React.createRef<SplitPaneProps>()

  componentDidMount = () => {
    this.setFunctionProps()
  }

  componentDidUpdate = () => {
    this.setFunctionProps()
  }

  setFunctionProps = () => {
    const { onClose, onResize } = this.props
    const unitySplitPane = this.splitPaneRef.current
    if (unitySplitPane) {
      unitySplitPane.onClose = onClose || (() => {})
      unitySplitPane.onResize = onResize || (() => {})
    }
  }

  render() {
    const {
      header,
      main,
      pane,
      show,
      closeButton,
      collapsed,
      ...otherProps
    } = this.props
    let splitPaneArgs : SplitPaneProps = {...otherProps}
    
    if (show) splitPaneArgs.show = show
    if (closeButton) splitPaneArgs.closeButton = closeButton
    if (collapsed) splitPaneArgs.collapsed = collapsed

    return (
      <unity-split-pane
        className="usp-wrapper"
        ref={this.splitPaneRef}
        {...splitPaneArgs}
      >
        <div slot="header">
          {header}
        </div>
        <div slot="main" style={{height: '100%', display: 'flex'}}>
          {main}
        </div>
        <div slot="pane" style={{height: '100%', display: 'flex', zIndex: 3}}>
          {pane}
        </div>
      </unity-split-pane>
    )
  }
}


export interface SplitPaneProps {
  header?: any
  main?: any
  pane?: any
  show?: boolean
  closeButton?: boolean
  onClose?: Function
  collapsed?: boolean
  paneWidth?: number
  onResize?: Function
  style?: splitPaneStyleTypes
}

export type splitPaneStyleTypes = React.CSSProperties & { 
  '--border-color'?: string
  '--bar-border-color'?: string
  '--background'?: string
  '--bar-background'?: string
}

