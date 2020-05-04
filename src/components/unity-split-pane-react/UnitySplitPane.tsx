import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-split-pane'

export default class UnitySplitPane extends Component<SplitPaneProps> {

  private splitPaneRef = React.createRef<SplitPaneProps>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { props, splitPaneRef } = this
    const unitySplitPane = splitPaneRef.current
    const { style, ...other} = props
    if (unitySplitPane) {
      for (let key of Object.keys(other)) {
        if (other[key]) unitySplitPane[key] = other[key]
      }
    }
  }

  render() {
    const {
      header,
      main,
      pane,
      footer,
      show,
      closeButton,
      collapsed,
      collapseButton,
      ...otherProps
    } = this.props
    let splitPaneArgs : SplitPaneProps = {...otherProps}

    if (show) splitPaneArgs.show = show
    if (closeButton) splitPaneArgs.closeButton = closeButton
    if (collapseButton) splitPaneArgs.collapseButton = collapseButton
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
        <div slot="footer">
          {footer}
        </div>
      </unity-split-pane>
    )
  }
}


export interface SplitPaneProps extends React.HTMLAttributes<HTMLElement>{
  [key:string]: any,
  header?: any
  main?: any
  pane?: any
  footer?: any
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
