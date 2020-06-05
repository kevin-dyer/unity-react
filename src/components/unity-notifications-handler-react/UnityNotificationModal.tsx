import React, { Component } from 'react'

import UnityModal, { ModalPropsI } from '@bit/smartworks.unity-react.unity-modal-react'
import UnityNotificationsHandler, { NotificationsHandlerPropsI } from './UnityNotificationsHandler'

export interface NotificationModalPropsI extends ModalPropsI {
  notifications?: NotificationsHandlerPropsI
}

export default class UnityNotificationModal extends Component<NotificationModalPropsI>{

  render() {
    const {
      notifications={},
      ...modalProps
    } = this.props

    const {
      target,
      ...notificationHandlerProps
    } = notifications

    if (!target) return (<UnityModal {...modalProps} />)

    return (
      <UnityNotificationsHandler
        target={target || 'no-target-specified'}
        {...notificationHandlerProps}
      >
        <UnityModal
          {...modalProps}
        />
      </UnityNotificationsHandler>
    )
  }
}