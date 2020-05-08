import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-toggle-switch'
import { toggleSwitchType } from '@bit/smartworks.unity.unity-core/unity-toggle-switch'

export default class UnityToggleSwitch extends Component<toggleSwitchType> {
  private switchRef = React.createRef<toggleSwitchType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: toggleSwitchType) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: toggleSwitchType={}) {
    const {
      onChange
    } = this.props

    const {
      onChange: oldOnChange
    } = oldProps

    const unitySwitch = this.switchRef.current
    if (unitySwitch) {
      if (oldOnChange !== onChange) unitySwitch.onChange = onChange
    }
  }

  render() {
    const {
      onChange,
      value,
      disabled,
      ...otherProps
    } = this.props

    const toggleProps : toggleSwitchType = otherProps
  
    if(value) {
      toggleProps.value = value
    }
    if (disabled) {
      toggleProps.disabled = disabled
    }

    return (
      <unity-toggle-switch
        ref={this.switchRef}
        {...toggleProps}
      ></unity-toggle-switch>
    )
  }
}