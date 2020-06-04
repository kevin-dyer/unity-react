import React, { Component } from 'react'

import UnitySplitPane, { SplitPaneProps } from '@bit/smartworks.unity-react.unity-split-pane-react'
import UnityNotificationsHandler, { NotificationsHandlerPropsI } from '@bit/smartworks.unity-react.unity-notifications-handler-react'

export interface NotificationSplitPanePropsI extends SplitPaneProps {
  notificationHandler: NotificationsHandlerPropsI
}

export default class UnityNotificationSplitPane extends Component<NotificationSplitPanePropsI>{

  render() {
    const {
      notificationHandler: notificationHandlerProps={},
      ...splitPaneProps
    } = this.props
    return (
      <UnityNotificationsHandler
        {...notificationHandlerProps}
      >
        <UnitySplitPane
          {...splitPaneProps}
        />
      </UnityNotificationsHandler>
    )
  }
}