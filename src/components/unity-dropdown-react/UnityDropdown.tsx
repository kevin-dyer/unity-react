import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-dropdown'
import { dropdownPropsType } from '@bit/smartworks.unity.unity-dropdown'

export default class UnityDropdown extends Component<dropdownPropsType> {
  private dropdownRef = React.createRef<dropdownPropsType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: dropdownPropsType) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: dropdownPropsType={}) {
    const {
      onMenuClick,
      onValueChange
    } = this.props

    const {
      onMenuClick: oldOnMenuClick,
      onValueChange: oldOnValueChange
    } = oldProps

    const unityDropdown = this.dropdownRef.current
    if (unityDropdown) {
      if (oldOnMenuClick !== onMenuClick) unityDropdown.onMenuClick = onMenuClick
      if (oldOnValueChange !== onValueChange) unityDropdown.onValueChange = onValueChange
    }
  }

  render() {
    const {
      options=[],
      selected=[],
      ...otherProps
    } = this.props
    const dropdownProps : dropdownPropsType = {
      options: JSON.stringify(options),
      selected: JSON.stringify(selected),
      ...otherProps
    }
    return (
      <unity-dropdown
        ref={this.dropdownRef}
        {...dropdownProps}
      ></unity-dropdown>
    )
  }
}
