import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-core/unity-modal'

export default class UnityModal extends Component<ModalPropsI> {

  private modalRef = React.createRef<ModalPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { props, modalRef } = this
    const unityModal = modalRef.current
    const { toggle } = props
    if (unityModal) {
      unityModal.toggle = toggle || (() => {})
    }
  }

  render() {
    const {
      show,
      cancelOnOutsideClick,
      top,
      body,
      bottom,
      ...otherProps
    } = this.props

    const modalProps : ModalPropsI = {...otherProps}
    if (show) modalProps.show = show
    if (cancelOnOutsideClick) modalProps.cancelOnOutsideClick = cancelOnOutsideClick

    return (
      <unity-modal
        ref={this.modalRef}
        {...modalProps}
      >``
         {!!top && (<div slot="top">
          {top}
        </div>)}
        {!!body && (<div slot="body">
          {body}
        </div>)}
        {!!bottom && (<div slot="bottom">
          {bottom}
        </div>)}
      </unity-modal>
    )
  }
}

export interface ModalPropsI extends React.HTMLAttributes<HTMLElement> {
  title?: string
  show?: boolean
  toggle?: Function
  cancelOnOutsideClick?: boolean,
  top?: any,
  body?: any,
  bottom?: any
}
