import React, { Component, CSSProperties, HTMLAttributes, MouseEvent as ReactMouseEvent } from 'react'

import '@bit/smartworks.unity.unity-core/unity-tag'


export interface tagPropsType extends HTMLAttributes<HTMLElement> {
  [key: string]: any
  label: string
  value?: string
  withClose?: boolean
  onClose?: Function
  onClick?: (event: ReactMouseEvent<HTMLElement, MouseEvent>) => void
  style?: tagStyles
}

export type tagStyles = CSSProperties & {
  '--tag-color'?: string
  '--tag-text-color'?: string
  '--tag-font-size'?: string
  '--tag-padding'?: string
}

export default class UnityTag extends Component<tagPropsType> {
  private tagRef = React.createRef<tagPropsType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { tagRef, props } = this
    const unityTag = tagRef.current
    const { onClose, onClick } = props
    if (unityTag) {
      if (onClose) unityTag.onClose = onClose
      if (onClick) unityTag.onClick = onClick
    }
  }

  render() {
    const {
      withClose,
      onClose,
      onClick,
      ...otherProps
    } = this.props
    const tagProps : tagPropsType = otherProps
    if (withClose) tagProps.withClose = withClose

    return (
      <unity-tag
        ref={this.tagRef}
        {...tagProps}
      ></unity-tag>
    )
  }
}
