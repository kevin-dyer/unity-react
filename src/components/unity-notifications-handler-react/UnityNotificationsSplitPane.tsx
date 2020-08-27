import React, { Component } from 'react'

import UnitySplitPane, { SplitPaneProps } from '@bit/smartworks.unity-react.unity-split-pane-react'
import UnityNotificationsHandler, { NotificationsHandlerPropsI } from './UnityNotificationsHandler'

export interface NotificationSplitPanePropsI extends SplitPaneProps {
  mainNotifications?: NotificationsHandlerPropsI,
  paneNotifications?: NotificationsHandlerPropsI,
}

export default class UnityNotificationsSplitPane extends Component<NotificationSplitPanePropsI>{

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