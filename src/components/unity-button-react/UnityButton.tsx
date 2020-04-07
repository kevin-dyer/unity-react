import React, { Component } from 'react';

import '@bit/smartworks.unity.unity-button'
import {buttonPropsType} from '@bit/smartworks.unity.unity-button'

export default class UnityButton extends Component<buttonPropsType> {
  render() {
    const {onClick, styles, ...otherProps} = this.props
    const buttonProps : buttonPropsType = {
      onClick: !otherProps.disabled ? onClick : ()=>{},
      style: styles
    }
    for(const prop of Object.keys(otherProps)) {
      if(otherProps[prop]) buttonProps[prop] = otherProps[prop]
    }
    return (
      <unity-button
        {...buttonProps}
      ></unity-button>
    )
  }
}
