import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-utility-belt'
import { UtilityBeltPropsI } from '@bit/smartworks.unity.unity-core/unity-utility-belt'

export default class UnityUtilityBelt extends Component<UtilityBeltPropsI> {
  private beltRef = React.createRef<UtilityBeltPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: UtilityBeltPropsI) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: UtilityBeltPropsI={}) {
    const {
      onTabSelect,
      onTabClose
    } = this.props

    const {
      onTabSelect: oldOnTabSelect,
      onTabClose: oldOnTabClose
    } = oldProps

    const unityUtilityBelt = this.beltRef.current
    if (unityUtilityBelt) {
      unityUtilityBelt.tabs = this.formatTabs()
      if (oldOnTabSelect !== onTabSelect) unityUtilityBelt.onTabSelect = onTabSelect
      if (oldOnTabClose !== onTabClose) unityUtilityBelt.onTabClose = onTabClose
    }
  }

  //Remove renderPane method from tabs
  formatTabs = () => {
    const {tabs=[]} = this.props
    return tabs.map(({renderPane, ...restOfTab}) => restOfTab)
  }

  renderPaneSlots = () => {
    const {tabs=[]} = this.props

    return tabs.map((tab, index) => (
      <>
        <div slot={`left-content-${tab.id}`} key={`${tab.id}-left-content`} style={styles.leftContent}>
          {tab.renderHeaderLeftContent && tab.renderHeaderLeftContent(tab, index)}
        </div>
        <div slot={`left-action-${tab.id}`} key={`${tab.id}-left-action`} style={styles.rightContent}>
          {tab.renderHeaderRightContent && tab.renderHeaderRightContent(tab, index)}
        </div>
        <div slot={`pane-${tab.id}`} key={tab.id} style={styles.pane}>
          {tab.renderPane && tab.renderPane(tab, index)}
        </div>
      </>
    ))
  }

  renderMainContent = () => {
    const {children} = this.props

    return children
      ? <div slot='main' style={styles.mainContainer}>{children}</div>
      : null
  }

  render() {
    const {
      tabs,
      onTabSelect,
      onTabClose,
      resizable,
      children,
      ...otherProps
    } = this.props
    const beltProps : UtilityBeltPropsI = otherProps

    if (resizable) beltProps.resizable = resizable

    return (
      <unity-utility-belt
        ref={this.beltRef}
        {...beltProps}
      >
        {this.renderMainContent()}
        {this.renderPaneSlots()}
      </unity-utility-belt>
    )
  }
}

const styles = {
  mainContainer: {
    flex: 1
  },
  pane: {
    flex: 1,
    height: '100%'
  },
  leftContent: {

  },
  rightContent: {

  }
}

export interface UtilityBeltPropsI extends React.HTMLAttributes<HTMLElement> {
  tabs?: UtilityTabI[],
  selectedTab?: string,
  resizable?: boolean,
  onTabSelect?: Function,
  onTabClose?: Function
}

export interface UtilityTabI {
    name?: string,
    icon?: string,
    id: string,
    renderPane?: Function,
    renderHeaderLeftContent?: Function,
    renderHeaderRightContent?: Function
  }

export interface BeltStylesI extends React.CSSProperties {
  '--tab-width'?: string,
  '--tab-height'?: string,
  '--selected-tab-background'?: string
}
