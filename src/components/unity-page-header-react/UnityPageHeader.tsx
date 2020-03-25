import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-page-header'

interface pageHeaderProps {
  title?: string,
  tabs?: object,
  selectedTab?: string,
  leftContent?: string,
  rightContent?: string,
  onTabSelect?: Function
}

//React component to wrap unity-page-header web component
export default class UnityPageHeader extends Component<pageHeaderProps> {

  private headerRef = React.createRef<pageHeaderProps>()

  componentDidMount() {
    this.updateProperties()
  }

  componentDidUpdate() {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps={}) {
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
    } = this.props
    const tabsStr = JSON.stringify(tabs)

    return <unity-page-header
      style={style.header}
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

const style = {
  header: {
    position: 'relative',
    zIndex: 4,
    flex: 0
  }
}
