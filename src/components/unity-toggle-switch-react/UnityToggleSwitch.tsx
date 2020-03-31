import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-toggle-switch'
import { toggleSwitchType } from '@bit/smartworks.unity.unity-toggle-switch'

export default class UnityToggleSwitch extends Component<toggleSwitchType> {
  render() {
    const {
      onChange,
      ...otherProps
    } = this.props
    const toggleSwitchProps : toggleSwitchType = {
      onChange: !otherProps.disabled ? onChange : ()=>{},
      ...otherProps
    }
    return (
      <unity-dropdown
        {...toggleSwitchProps}
      ></unity-dropdown>
    )
  }
}
