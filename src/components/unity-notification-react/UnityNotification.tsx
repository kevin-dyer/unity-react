import React, { Component } from 'react'

import { v4 as uuid } from 'uuid'

import '@bit/smartworks.unity.unity-core/unity-notification'
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

interface NotificationPropsWithTypeI extends NotificationPropsI {
  type?: string
}

export interface NotificationStylesI extends React.CSSProperties {
  '--notification-color'?: string
  '--notification-height'?: string
  '--notification-width'?: string
}

interface NotificationWrappedComponentPropsI {
  addNotification: (params: {
    name?: string,
    notification: NotificationPropsWithTypeI
  }) => void,
  closeNotification: (target: string) => void,
  clearNotifications: (target: string) => void,
}

interface NotificationsHandlerPropsI extends React.HTMLAttributes<HTMLElement> {
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

export function withNotifications(handlerProps: NotificationsHandlerPropsI) {
  return function wrapComponent<T>(WrappedComponent: React.ComponentType<T extends NotificationWrappedComponentPropsI>): React.ReactNode {
    return class ComponentWithNotifications extends Component { 
      private _uniqueName: string
      private _notificationsHandlerRef: React.Ref<NotificationsHandlerPropsI>

      constructor(props: T) {
        super(props)

        const { name } = handlerProps
        this._uniqueName = name || uuid() 
        this._notificationsHandlerRef = React.createRef()
      }    
      
      render() {
        const { props, _uniqueName, _notificationsHandlerRef } = this

        const {
          icons,
          colors,
          customTypes,
          allowDuplicates,
          noAnimation,
          onClose
        } = handlerProps
        
        const notificationsHandler = _notificationsHandlerRef.current
        if (!!notificationsHandler) {
          if (!!icons) notificationsHandler.icons = icons
          if (!!colors) notificationsHandler.colors = colors
          if (!!customTypes) notificationsHandler.customTypes = customTypes
          if (!!allowDuplicates) notificationsHandler.allowDuplicates = allowDuplicates
          if (!!noAnimation) notificationsHandler.noAnimation = noAnimation
          if (!!onClose) notificationsHandler.onClose = onClose
        }

        return (
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <WrappedComponent
              addNotification={({
                name: target=_uniqueName,
                notification
              }) => addNotification(target, notification)}
              closeNotiification={(target=_uniqueName) => closeNotification(target)}
              clearNotification={(target=_uniqueName) => clearNotifications(target)}
              { ...props }
            />
            <unity-notifications-handler
              name={_uniqueName}
              ref={_notificationsHandlerRef}
            ></unity-notifications-handler>/
          </div>
        )
      }
    }
  }
}