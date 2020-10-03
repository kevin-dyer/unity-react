import React, { Component, CSSProperties, HTMLAttributes } from 'react'
import '@bit/smartworks.unity.unity-core/unity-page-header'

export interface pageHeaderProps extends HTMLAttributes<HTMLElement>{
  header?: string,
  tabs?: object,
  selectedTab?: string,
  leftContent?: any,
  centerContent?: any,
  leftAction?: any,
  rightAction?: any,
  style?: pageHeaderStylesTypes,
  onTabSelect?: Function
}

export type pageHeaderStylesTypes = CSSProperties & {
  '--header-font-family'?: string
  '--tab-height'?: string
  '--tab-padding'?: string
  '--left-wrapper-overflow'?: string
  '--title-white-space'?: string
  '--tab-color'?: string
  '--page-header-padding-size'?: string
  '--page-header-padding'?: string
  '--page-header-border'?: string
  '--page-header-font-size'?: string
  '--page-header-font-weight'?: string
  '--page-header-tabs-font-size'?: string
  '--page-header-icon-size'?: string
  '--page-header-z-index'?: string
  '--page-header-background-color'?: string
  '--separator-color'?: string
}

//React component to wrap unity-page-header web component
export default class UnityPageHeader extends Component<pageHeaderProps> {

  private headerRef = React.createRef<pageHeaderProps>()

  componentDidMount() {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: pageHeaderProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: pageHeaderProps={}) {
    const {onTabSelect: oldTabSelect} = oldProps
    const {onTabSelect=()=>{}} = this.props
    const headerElement = this.headerRef.current

    if (!headerElement) return

    if (onTabSelect !== oldTabSelect) {
      headerElement.onTabSelect = onTabSelect
    }
  }

  render() {
    const {
      header='',
      tabs=[],
      selectedTab,
      leftContent,
      centerContent,
      leftAction,
      rightAction,
      style
    } = this.props
    const tabsStr = JSON.stringify(tabs)

    return <unity-page-header
      style={style}
      ref={this.headerRef}
      header={header}
      tabs={tabsStr}
      selectedTab={selectedTab}
    >
      {!!leftContent &&
        <div slot="left-content">
          {leftContent}
        </div>
      }

      {!!centerContent &&
        <div slot="center-content">
          {centerContent}
        </div>
      }

      {!!leftAction &&
        <div slot="left-action">
          {leftAction}
        </div>
      }

      {!!rightAction &&
        <div slot="right-action">
          {rightAction}
        </div>
      }
    </unity-page-header>
  }
}
