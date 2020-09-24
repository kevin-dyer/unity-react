import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-notification'

export default class UnityNotification extends Component<NotificationPropsI> {

  private notificationRef = React.createRef<NotificationPropsI>()

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
    if (!!unityNotification) {
      if (!!onClose) unityNotification.onClose = onClose
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

export interface NotificationPropsI extends React.HTMLAttributes<HTMLElement> {
  text?: string 
  subtext?: string
  icon?: string
  onClose?: Function
  style?: NotificationStylesI
}


export interface NotificationStylesI extends React.CSSProperties {
  '--notification-color'?: string
  '--notification-height'?: string
  '--notification-width'?: string
  '--notification-button-padding'?: string
  '--notification-z-index'?: string | number
}