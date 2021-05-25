import React, { Component, Fragment } from 'react'

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
      <Fragment key={`framgment-${tab.id}`}>
        <div slot={`left-content-${tab.id}`} key={`${tab.id}-left-content`} style={styles.leftContent}>
          {tab.renderHeaderLeftContent && tab.renderHeaderLeftContent(tab, index)}
        </div>
        <div slot={`left-action-${tab.id}`} key={`${tab.id}-left-action`} style={styles.rightContent}>
          {tab.renderHeaderRightContent && tab.renderHeaderRightContent(tab, index)}
        </div>
        <div slot={`pane-${tab.id}`} key={`${tab.id}-pane`} style={styles.pane}>
          {tab.renderPane && tab.renderPane(tab, index)}
        </div>
      </Fragment>
    ))
  }

  renderMainContent = () => {
    const {children} = this.props

    return children
      ? <div slot='main' style={styles.mainContainer} key="main-content">{children}</div>
      : null
  }

  renderFooterRightActions = () => {
    const {renderFooterRightActions} = this.props

    if (renderFooterRightActions) {
      return <div slot="right-actions" key="footer-right-actions" style={styles.footerRightActions}>
        {renderFooterRightActions()}
      </div>
    }
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
        {this.renderFooterRightActions()}
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

  },
  footerRightActions: {
  }
}

export interface UtilityBeltPropsI extends React.HTMLAttributes<HTMLElement> {
  tabs?: UtilityTabI[],
  selectedTab?: string,
  resizable?: boolean,
  onTabSelect?: Function,
  onTabClose?: Function,
  renderFooterRightActions?: Function,
}

export interface UtilityTabI {
    name?: string,
    header?: string,
    icon?: string,
    id: string,
    renderPane?: Function,
    renderHeaderLeftContent?: Function,
    renderHeaderRightContent?: Function,
  }

export interface BeltStylesI extends React.CSSProperties {
  '--tab-width'?: string,
  '--tab-height'?: string,
  '--selected-tab-background'?: string,
  '--page-header-left-wrapper-overflow'?: string
}
