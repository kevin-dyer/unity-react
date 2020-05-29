import React, { Component, CSSProperties } from 'react'
import { v4 as uuid } from 'uuid'

import { NotificationPropsI, NotificationStylesI } from './UnityNotification'
import { addNotification, closeNotification, clearNotifications } from '@bit/smartworks.unity.unity-core/unity-notifications-handler'

interface NotificationsHandlerPropsI {
  name?: string,
  position?: string,
  icons?: NotificationTypesAssingerI,
  colors?: NotificationTypesAssingerI,
  customTypes?: object,
  allowDuplicates?: boolean,
  noAnimation?: boolean,
  onClose?: () => boolean | Promise<boolean>,
  component?: React.ComponentType | React.ElementType
}

interface NotificationWrappedComponentPropsI extends NotificationsHandlerPropsI {
  addNotification?: (params: {
    name?: string,
    notification: NotificationPropsWithTypeI
  }) => void,
  closeNotification?: (target: string) => void,
  clearNotifications?: (target: string) => void,
  style?: CSSProperties & NotificationStylesI,
  children?: JSX.Element,
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
      props,
      props: {
        children
      }
  } = this
    return (
      <unity-notifications-handler
        ref={_notificationsHandlerRef}
        {...props}
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
        icons,
        colors,
        customTypes,
        allowDuplicates,
        noAnimation,
        onClose
      } = handlerProps
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
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <unity-notifications-handler
            name={_uniqueName}
            ref={_notificationsHandlerRef}
          >
            <WrappedComponent
              addNotification={({
                name: target=_uniqueName,
                notification
              }) => addNotification({name: target, notification})}
              closeNotification={(target=_uniqueName) => closeNotification(target)}
              clearNotifications={(target=_uniqueName) => clearNotifications(target)}
              { ...props }
            />
          </unity-notifications-handler>
        </div>
      )
    }
    
    
    
    // return class ComponentWithNotifications extends NotificationWrappedComponentPropsI { 
    //   private _uniqueName: string
    //   private _notificationsHandlerRef: React.RefObject<NotificationsHandlerPropsI>
      
    //   constructor(props: T) {
    //     super(props)
        
    //     const { name } = handlerProps
    //     this._uniqueName = name || uuid() 
    //     this._notificationsHandlerRef = React.createRef()
    //   }    
      
    //   render() {
    //     const { props, _uniqueName, _notificationsHandlerRef } = this
        
    //     const {
    //       icons,
    //       colors,
    //       customTypes,
    //       allowDuplicates,
    //       noAnimation,
    //       onClose
    //     } = handlerProps
        
    //     const {
    //       current: notificationsHandler=null
    //     } = _notificationsHandlerRef || {}
    //     if (!!notificationsHandler) {
    //       if (!!icons) notificationsHandler.icons = icons
    //       if (!!colors) notificationsHandler.colors = colors
    //       if (!!customTypes) notificationsHandler.customTypes = customTypes
    //       if (!!allowDuplicates) notificationsHandler.allowDuplicates = allowDuplicates
    //       if (!!noAnimation) notificationsHandler.noAnimation = noAnimation
    //       if (!!onClose) notificationsHandler.onClose = onClose
    //     }
        
    //     return (
    //       <div style={{ position: 'relative', overflow: 'hidden' }}>
    //         <WrappedComponent
    //           addNotification={({
    //             name: target=_uniqueName,
    //             notification
    //           }) => addNotification(target, notification)}
    //           closeNotification={(target=_uniqueName) => closeNotification(target)}
    //           clearNotifications={(target=_uniqueName) => clearNotifications(target)}
    //           { ...props }
    //           />
    //         <unity-notifications-handler
    //           name={_uniqueName}
    //           ref={_notificationsHandlerRef}
    //           ></unity-notifications-handler>/
    //       </div>
    //     )
    //   }
    // }
  }
}

export { addNotification, closeNotification, clearNotifications }