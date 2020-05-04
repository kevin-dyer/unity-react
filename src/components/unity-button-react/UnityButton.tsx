import React, { Component } from 'react';

import '@bit/smartworks.unity.unity-button'
import {buttonPropsType} from '@bit/smartworks.unity.unity-button'

export default class UnityButton extends Component<buttonPropsType> {

  private buttonRef = React.createRef<buttonPropsType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { buttonRef, props } = this
    const unityButton = buttonRef.current
    const { style, children, ...buttonProps} = props
    if (unityButton) {
      for (let key of Object.keys(buttonProps)) {
        if (buttonProps[key]) unityButton[key] = buttonProps[key]
      }
    }
  }

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
        ref={this.buttonRef}
        {...buttonProps}
      ></unity-button>
    )
  }
}
