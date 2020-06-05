import React, { Component } from 'react'

import UnitySplitPane, { SplitPaneProps } from '@bit/smartworks.unity-react.unity-split-pane-react'
import UnityNotificationsHandler, { NotificationsHandlerPropsI } from '@bit/smartworks.unity-react.unity-notifications-handler-react'

export interface NotificationSplitPanePropsI extends SplitPaneProps {
  mainNotifications?: NotificationsHandlerPropsI,
  paneNotifications?: NotificationsHandlerPropsI,
}

export default class UnityNotificationSplitPane extends Component<NotificationSplitPanePropsI>{

  render() {
    const {
      mainNotifications={},
      paneNotifications={},
      main,
      pane,
      ...splitPaneProps
    } = this.props

    return (
      <UnitySplitPane
        main={!!mainNotifications.target ?  (
          <UnityNotificationsHandler
            {...mainNotifications}
          >
            {main}
          </UnityNotificationsHandler>
        ) : main}
        pane={!!paneNotifications.target ?  (
          <UnityNotificationsHandler
            {...paneNotifications}
          >
            {pane}
          </UnityNotificationsHandler>
        ) : pane}
        {...splitPaneProps}
      />
    )
  }
}