import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-core/unity-page-header'
import { pageHeaderProps } from '@bit/smartworks.unity.unity-core/unity-page-header'

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
