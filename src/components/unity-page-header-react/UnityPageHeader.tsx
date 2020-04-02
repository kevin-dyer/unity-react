import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-page-header'
import { pageHeaderProps } from '@bit/smartworks.unity.unity-page-header'

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
      title='',
      tabs=[],
      selectedTab,
      leftContent,
      rightContent,
      style
    } = this.props
    const tabsStr = JSON.stringify(tabs)

    return <unity-page-header
      style={style}
      ref={this.headerRef}
      title={title}
      tabs={tabsStr}
      selectedTab={selectedTab}
    >
      {!!leftContent &&
        <div slot="left-content">
          {leftContent}
        </div>
      }

      {!!rightContent &&
        <div slot="right-content">
          {rightContent}
        </div>
      }
    </unity-page-header>
  }
}
