import React, { Component } from 'react'

import { v4 as uuid } from 'uuid'

import '@bit/smartworks.unity.unity-core/unity-notification'
import '@bit/smartworks.unity.unity-core/unity-notifications-handler'
import { addNotification, closeNotification, clearNotifications } from '@bit/smartworks.unity.unity-core/unity-notifications-handler'

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

export interface NotificationPropsI extends React.HTMLAttributes<HTMLElement> {
  text?: string 
  subtext?: string
  icon?: string
  onClose?: Function
  style?: NotificationStylesI
}

interface NotificationPropsWithTypeI extends NotificationPropsI {
  type?: string
}

export interface NotificationStylesI extends React.CSSProperties {
  '--notification-color'?: string
  '--notification-height'?: string
  '--notification-width'?: string
}

interface NotificationsHandlerPropsI {
  name?: string,
  position?: string,
  icons?: NotificationTypesAssingerI,
  colors?: NotificationTypesAssingerI,
  customTypes?: object,
  allowDuplicates?: boolean,
  noAnimation?: boolean,
  onClose?: () => boolean | Promise<boolean>,
}

interface NotificationTypesAssingerI {
  success?: string,
  error?: string,
  warning?: string,
  tip?: string,
  help?: string,
}

export function withNotifications<T>(handlerProps: NotificationsHandlerPropsI) {
  return (WrappedComponent: React.ComponentType<T>): React.ReactNode => {
    return (props: T) => {  
      const { name, ...restOfHandlerProps } = handlerProps
      const uniqueName = name || uuid()

        return (
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <WrappedComponent
              addNotification={({
                name: target=uniqueName,
                notification
              }: {
                name?: string,
                notification: NotificationPropsWithTypeI
              }) => addNotification(target, notification)}
              closeNotiification={(target=uniqueName) => closeNotification(target)}
              clearNotification={(target=uniqueName) => clearNotifications(target)}
              { ...props }
            />
            <unity-notifications-handler
              name={uniqueName}
              { ...restOfHandlerProps }
            ></unity-notifications-handler>/
          </div>
        )
    }
  }
}