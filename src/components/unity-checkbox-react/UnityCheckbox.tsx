import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-checkbox'
import { CheckboxPropsI } from '@bit/smartworks.unity.unity-core/unity-checkbox'

export default class UnityCheckbox extends Component<CheckboxPropsI> {
  private checkboxRef = React.createRef<CheckboxPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: CheckboxPropsI) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: CheckboxPropsI={}) {
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
      ignoreClicks,
      ...otherProps
    } = this.props

    const checkboxProps : CheckboxPropsI = otherProps

    if(checked) {
      checkboxProps.checked = checked
    }
    if(indeterminate) {
      checkboxProps.indeterminate = indeterminate
    }
    if (disabled) {
      checkboxProps.disabled = disabled
    }
    if (ignoreClicks) {
      checkboxProps.ignoreClicks = ignoreClicks
    }

    return (
      <unity-checkbox
        ref={this.checkboxRef}
        {...checkboxProps}
      ></unity-checkbox>
    )
  }
}
