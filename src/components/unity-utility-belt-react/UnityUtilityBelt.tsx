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
      // tabs,
      // selectedTab,
      onTabSelect,
      onTabClose
    } = this.props

    const {
      // tabs: oldTabs,
      // selectedTab: oldSelectedTab,
      onTabSelect: oldOnTabSelect,
      onTabClose: oldOnTabClose
    } = oldProps

    const unityUtilityBelt = this.beltRef.current
    if (unityUtilityBelt) {
      // if (oldOnChange !== onChange) unityUtilityBelt.onChange = onChange
      // if (oldTabs !== tabs) unityUtilityBelt.tabs = tabs
      unityUtilityBelt.tabs = this.formatTabs()
      // if (oldSelectedTab !== selectedTab) unityUtilityBelt.selectedTab = selectedTab
      if (oldOnTabSelect !== onTabSelect) unityUtilityBelt.onTabSelect = onTabSelect
      if (oldOnTabClose !== onTabClose) unityUtilityBelt.onTabClose = onTabClose
    }
  }

  //Remove render
  formatTabs = () => {
    const {tabs=[]} = this.props
    return tabs.map(({renderPane, ...restOfTab}) => restOfTab)
  }

  renderPaneSlots = () => {
    const {tabs=[]} = this.props

    return tabs.map((tab, index) => (
      <div slot={tab.id} key={tab.id}>
        {tab.renderPane && tab.renderPane(tab, index)}
      </div>
    ))
  }

  render() {
    const {
      tabs,
      onTabSelect,
      onTabClose,
      resizable,
      ...otherProps
    } = this.props
    // const formattedTabs = this.formatTabs()
    const beltProps : UtilityBeltPropsI = otherProps

    if (resizable) beltProps.resizable = resizable
    // beltProps.tabs = formattedTabs

  // console.log(JSON.parse(beltProps.tabs))

    return (
      <unity-utility-belt
        ref={this.beltRef}
        {...beltProps}
      >
        {this.renderPaneSlots()}
      </unity-utility-belt>
    )
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
    renderPane?: Function
  }

export interface BeltStylesI extends React.CSSProperties {
  '--tab-width'?: string,
  '--tab-height'?: string,
  '--selected-tab-background'?: string
}
