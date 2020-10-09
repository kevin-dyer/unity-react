import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-checkbox'
import { checkboxType } from '@bit/smartworks.unity.unity-core/unity-checkbox'

export default class UnityCheckbox extends Component<checkboxType> {
  private checkboxRef = React.createRef<checkboxType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: checkboxType) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: checkboxType={}) {
    const {
      onChange
    } = this.props

    const {
      onChange: oldOnChange
    } = oldProps

    const unityCheckbox = this.checkboxRef.current
    if (unityCheckbox) {
      if (oldOnChange !== onChange) unityCheckbox.onChange = onChange
    }
  }

  render() {
    const {
      onChange,
      checked,
      indeterminate,
      disabled,
      ...otherProps
    } = this.props

    const checkboxProps : checkboxType = otherProps

    if(checked) {
      checkboxProps.checked = checked
    }
    if(indeterminate) {
      checkboxProps.indeterminate = indeterminate
    }
    if (disabled) {
      checkboxProps.disabled = disabled
    }

    return (
      <unity-checkbox
        ref={this.checkboxRef}
        {...checkboxProps}
      ></unity-checkbox>
    )
  }
}
