import React, { Component, CSSProperties, HTMLAttributes, MouseEvent as ReactMouseEvent } from 'react';

import '@bit/smartworks.unity.unity-core/unity-button'


export type buttonType = 'primary' | 'secondary' | 'borderless'

export interface buttonPropsType extends HTMLAttributes<HTMLElement>{
  [key: string]: any
  label?: string
  leftIcon?: string
  rightIcon?: string
  centerIcon?: string
  type?: buttonType
  important?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: (event: ReactMouseEvent<HTMLElement, MouseEvent>) => void
  style?: buttonStyles
}

export type buttonStyles = CSSProperties & {
  '--default-button-primary-color'?: string
  '--default-button-primary-pressed-color'?: string
  '--default-button-secondary-text-color'?: string
  '--default-button-secondary-color'?: string
  '--default-button-borderless-text-color'?: string
  '--default-button-borderless-color'?: string
  '--default-button-borderless-pressed-color'?: string
  '--default-button-disabled-text-color'?: string
  '--default-button-disabled-color'?: string
  '--default-button-important-color'?: string
  '--default-button-important-pressed-color'?: string
  '--default-background-color'?: string
  '--button-color'?: string
  '--pressed-color'?: string
  '--font-color'?: string
  '--icon-color'?: string
  '--button-width'?: string
  '--button-padding'?: string
  '--button-hover-color'?: string
}

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
