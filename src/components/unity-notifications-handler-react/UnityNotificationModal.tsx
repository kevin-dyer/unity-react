import React, { Component } from 'react'

import UnityModal, { ModalPropsI } from '@bit/smartworks.unity-react.unity-modal-react'
import UnityNotificationsHandler, { NotificationsHandlerPropsI } from '@bit/smartworks.unity-react.unity-notifications-handler-react'

export interface NotificationModalPropsI extends ModalPropsI {
  notificationHandler: NotificationsHandlerPropsI
}

export default class UnityNotificationModal extends Component<NotificationModalPropsI>{

  render() {
    const {
      notificationHandler: notificationHandlerProps={},
      ...modalProps
    } = this.props
    return (
      <UnityNotificationsHandler
        {...notificationHandlerProps}
      >
        <UnityModal
          {...modalProps}
        />
      </UnityNotificationsHandler>
    )
  }
}