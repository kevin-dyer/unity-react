import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-notification'

export default class UnityNotification extends Component<notificationPropsType> {

  private notificationRef = React.createRef<notificationPropsType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { props, notificationRef } = this
    const unityNotification = notificationRef.current
    const { onClose } = props
    if (unityNotification) {
      if (onClose) unityNotification.onClose = onClose
    }
  }

  render() {
    const { notificationRef, props } = this
    return (
      <unity-notification
        ref={notificationRef}
        {...props}
      >
      </unity-notification>
    )
  }
}

export interface notificationPropsType extends React.HTMLAttributes<HTMLElement> {
  text?: string 
  subtext?: string
  icon?: string
  onClose?: Function
  style?: notificationStyleTypes
}

export type notificationStyleTypes = React.CSSProperties & {
  '--notification-color'?: string
  '--notification-height'?: string
  '--notification-width'?: string
}
