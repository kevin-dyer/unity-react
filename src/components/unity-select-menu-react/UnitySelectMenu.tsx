import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-select-menu'

export default class UnitySelectMenu extends Component<SelectMenuPropsI> {
  private selectMenuRef = React.createRef<SelectMenuPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: SelectMenuPropsI) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps?: SelectMenuPropsI) {
    const {
      options,
      onMenuClick,
    } = this.props

    const {
      options: oldOptions,
      onMenuClick: oldOnMenuClick
    } = oldProps || {}

    const unitySelectMenu = this.selectMenuRef.current
    if (unitySelectMenu) {
      if (oldOptions !== options) unitySelectMenu.options = options
      if (oldOnMenuClick !== onMenuClick) unitySelectMenu.onMenuClick = onMenuClick
    }
  }

  render() {
    const {
      borderless,
      onMenuClick,
      options,
      ...otherProps
    } = this.props

    const selectMenuProps : SelectMenuPropsI = { ...otherProps }

    if (borderless) selectMenuProps.borderless = true
    
    return (
      <unity-select-menu
        ref={this.selectMenuRef}
        {...selectMenuProps}
      ></unity-select-menu>
    )
  }
}

interface MenuItemI {
  id?: string | number
  label?: string
  disabled?: boolean
  submenu?: MenuItemI[]
}

export interface SelectMenuPropsI extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any
  options?: MenuItemI[]
  onMenuClick?: Function
  borderless?: boolean
}

export type SelectMenuStylesT = React.CSSProperties & {
  '--input-font'?: string
  '--label-color'?: string
  '--text-color'?: string
  '--text-size'?: string
  '--border-color'?: string
  '--menu-hover-color'?: string
}
