import UnityModal from '@bit/smartworks.unity-react.unity-modal-react'
import UnityNotificationsHandler from '@bit/smartworks.unity-react.unity-notifications-handler-react'

import { NotificationsHandlerPropsI } from '@bit/smartworks.unity-react.unity-notifications-handler-react'


export default class UnityNotificationModal {

  render() {
    const {
      target
    }
    return (
      <UnityNotificationsHandler
        target={target}
      >
        <UnityModal

        />
      </UnityNotificationsHandler>
    )
  }
}