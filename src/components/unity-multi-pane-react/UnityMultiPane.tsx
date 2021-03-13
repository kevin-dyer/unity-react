import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-core/unity-multi-pane'

export default class UnityMultiPane extends Component<MultiPaneProps> {

  private multiPaneRef = React.createRef<MultiPaneProps>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { props, multiPaneRef } = this
    const unityMultiPane = multiPaneRef.current
    const { panes, onClose, onCollapseChange, closeButton, collapseButton } = props
    if (unityMultiPane) {
      unityMultiPane.onClose = onClose || (() => {})
      unityMultiPane.onCollapseChange = onCollapseChange || (() => {})
      unityMultiPane.panes = panes
      if (closeButton) unityMultiPane.closeButton = closeButton
      if (collapseButton) unityMultiPane.collapseButton = collapseButton
    }
  }

  render() {
    const {
      panes=[],
      closeButton,
      collapseButton,
      labels,
      visiblePanes,
      collapsedPanes,
      ...otherProps
    } = this.props
    let multiPaneArgs : MultiPaneProps = {...otherProps}

    if (closeButton) multiPaneArgs.closeButton = closeButton
    if (collapseButton) multiPaneArgs.collapseButton = collapseButton

    return (
      <unity-multi-pane
        className="ump-wrapper"
        ref={this.multiPaneRef}
        labels={JSON.stringify(labels)}
        visiblePanes={JSON.stringify(visiblePanes)}
        collapsedPanes={JSON.stringify(collapsedPanes)}
        {...multiPaneArgs}
      >
        {panes.map(({key, header, body, footer}) => {
          let slots = []
          if (!!header) slots.push((
            <div
              slot={`${key}::header`}
              key={`${key}-header`}
              style={{flex: 1, width: '100%', display: 'flex'}}
            >
              {header}
            </div>
          ))
          slots.push((
            <div
              slot={key}
              key={`${key}-body`}
              style={{flex: 1, width: '100%', display: 'flex'}}
            >
              {body}
            </div>
          ))
          if (!!footer) slots.push((
            <div
              slot={`${key}::footer`}
              key={`${key}-footer`}
              style={{flex: 1, width: '100%', display: 'flex'}}
            >
              {footer}
            </div>
          ))
          return slots
        })}
      </unity-multi-pane>
    )
  }
}


export interface MultiPaneProps extends React.HTMLAttributes<HTMLElement>{
  [key:string]: any,
  panes?: Panes[]
  visiblePanes?: string[]
  collapsedPanes?: string[]
  label?: string
  closeButton?: boolean
  onClose?: Function
  collapsed?: boolean
  onCollapseChange?: Function
  style?: multiPaneStyleTypes
}

interface Panes {
  key: string,
  header?: object,
  body: object,
  footer?: object
}

export type multiPaneStyleTypes = React.CSSProperties & {
  '--border-color'?: string
  '--bar-border-color'?: string
  '--background'?: string
  '--bar-background'?: string
  '--pane-border-width'?: string
  '--pane-border-color'?: string
  '--bar-width'?: string
  '--header-border'?: string
  '--collapse-button-padding'?: string
  '--pane-z-index'?: string
}
