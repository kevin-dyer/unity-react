import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-dropdown'
import { dropdownPropsType } from '@bit/smartworks.unity.unity-dropdown'

export default class UnityDropdown extends Component<dropdownPropsType> {
  render() {
    const {
      onMenuClick,
      onValueChange,
      options=[],
      selected=[],
      ...otherProps
    } = this.props
    const dropdownProps : dropdownPropsType = {
      onMenuClick: !otherProps.disabled ? onMenuClick : ()=>{},
      onValueChange: !otherProps.disabled ? onValueChange : ()=>{},
      options: JSON.stringify(options),
      selected: JSON.stringify(selected),
      ...otherProps
    }
    return (
      <unity-dropdown
        {...dropdownProps}
      ></unity-dropdown>
    )
  }
}
