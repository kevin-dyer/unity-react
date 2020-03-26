import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-dropdown'
import { dropdownPropsType } from '@bit/smartworks.unity.unity-dropdown'

export default class UnityDropdown extends Component<dropdownPropsType> {
  render() {
    const {
      onMenuClick,
      onValueChange,
      ...otherProps
    } = this.props
    const dropdownProps : dropdownPropsType = {
      onMenuClick: !otherProps.disabled ? onMenuClick : ()=>{},
      onValueChange: !otherProps.disabled ? onValueChange : ()=>{},
      options: JSON.stringify(otherProps.options)
    }
    return (
      <unity-dropdown
        {...dropdownProps}
      ></unity-dropdown>
    )
  }
}
