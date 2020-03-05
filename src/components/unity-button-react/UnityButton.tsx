import React, { Component } from 'react';

import '@bit/smartworks.unity.unity-button'
import {buttonPropsType} from '@bit/smartworks.unity.unity-button'

export default class UnityButton extends Component<buttonPropsType> {
  render() {
    const {onClick, ...otherProps} = this.props
    const buttonProps : buttonPropsType = {
      ...otherProps,
      onClick: !otherProps.disabled ? onClick : ()=>{}
    }
    return (
      <unity-button
        {...buttonProps}
      ></unity-button>
    )
  }
}
