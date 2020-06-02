import React, { Component, CSSProperties } from 'react'
import { v4 as uuid } from 'uuid'

import { NotificationPropsI, NotificationStylesI } from '@bit/smartworks.unity-react.unity-notification-react'
import { addNotification, closeNotification, clearNotifications } from '@bit/smartworks.unity.unity-core/unity-notifications-handler'


interface NotificationsHandlerPropsI extends React.HTMLAttributes<HTMLElement> {
  name?: string,
  position?: string,
  icons?: NotificationTypesAssingerI,
  colors?: NotificationTypesAssingerI,
  customTypes?: object,
  allowDuplicates?: boolean,
  noAnimation?: boolean,
  onClose?: () => boolean | Promise<boolean>,
  // component?: React.ComponentType | React.ElementType
  style?: CSSProperties & NotificationStylesI,
}

interface NotificationWrappedComponentPropsI extends NotificationsHandlerPropsI {
  addNotification?: (params: {
    name?: string,
    notification: NotificationPropsWithTypeI
  }) => void,
  closeNotification?: (target: string) => void,
  clearNotifications?: (target: string) => void,
  children?: JSX.Element,
  text?: string
}

interface NotificationPropsWithTypeI extends NotificationPropsI {
  type?: string
}

interface NotificationTypesAssingerI {
  success?: string,
  error?: string,
  warning?: string,
  tip?: string,
  help?: string,
}

export default class UnityNotificationsHandler extends Component<NotificationsHandlerPropsI> {
  private _notificationsHandlerRef = React.createRef<NotificationsHandlerPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { props, _notificationsHandlerRef } = this
    const unityNotificationsHandler = _notificationsHandlerRef.current
    const {
      icons,
      colors,
      customTypes,
      allowDuplicates,
      noAnimation,
      onClose
    } = props
    if (!!unityNotificationsHandler) {
      if (!!icons) unityNotificationsHandler.icons = icons
      if (!!colors) unityNotificationsHandler.colors = colors
      if (!!customTypes) unityNotificationsHandler.customTypes = customTypes
      if (!!allowDuplicates) unityNotificationsHandler.allowDuplicates = allowDuplicates
      if (!!noAnimation) unityNotificationsHandler.noAnimation = noAnimation
      if (!!onClose) unityNotificationsHandler.onClose = onClose
    }
  }

  render() {
    const {
      _notificationsHandlerRef,
      props: {
        children,
        ...restOfProps
      }={}
    } = this
    
    if (!this.props.name) {
      console.warn(`UnityNotificationsHandler was not passed a "name" property.`)
      return (<>{children}</>)
    }
    return (
      <unity-notifications-handler
        ref={_notificationsHandlerRef}
        {...restOfProps}
      >
        {children}
      </unity-notifications-handler>
    )
  }
}

export function withNotifications(handlerProps: NotificationsHandlerPropsI) {
  return function wrapComponent(WrappedComponent: React.FunctionComponent<NotificationWrappedComponentPropsI>) {
    return (props: NotificationWrappedComponentPropsI) => {
      const {
        name,
        position,
        icons,
        colors,
        customTypes,
        allowDuplicates,
        noAnimation,
        onClose,
        style
      } = handlerProps || {}
      const _uniqueName: string = name || uuid()
      const _notificationsHandlerRef: React.RefObject<NotificationsHandlerPropsI> = React.createRef()
      const {
        current: notificationsHandler=null
      } = _notificationsHandlerRef || {}
      if (!!notificationsHandler) {
        if (!!icons) notificationsHandler.icons = icons
        if (!!colors) notificationsHandler.colors = colors
        if (!!customTypes) notificationsHandler.customTypes = customTypes
        if (!!allowDuplicates) notificationsHandler.allowDuplicates = allowDuplicates
        if (!!noAnimation) notificationsHandler.noAnimation = noAnimation
        if (!!onClose) notificationsHandler.onClose = onClose
      }

      return (
        <unity-notifications-handler
          name={_uniqueName}
          position={position}
          ref={_notificationsHandlerRef}
          style={style}
        >
          <WrappedComponent
            addNotification={({
              name: target=_uniqueName,
              notification
            }) => addNotification({ name: target, notification })}
            closeNotification={(target=_uniqueName) => closeNotification(target)}
            clearNotifications={(target=_uniqueName) => clearNotifications(target)}
            { ...props }
          />
        </unity-notifications-handler>
      )
    }
  }
}

export { addNotification, closeNotification, clearNotifications }