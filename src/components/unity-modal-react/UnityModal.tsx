import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-modal'

export default class UnityModal extends Component<modalPropsType> {

  private modalRef = React.createRef<modalPropsType>()

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

    const modalProps : modalPropsType = {...otherProps}
    if (show) modalProps.show = show
    if (cancelOnOutsideClick) modalProps.cancelOnOutsideClick = cancelOnOutsideClick

    return (
      <unity-modal
        {...modalProps}
      >
         <div slot="top">
          {top}
        </div>
        <div slot="body">
          {body}
        </div>
        <div slot="bottom">
          {bottom}
        </div>
      </unity-modal>
    )
  }
}

export interface modalPropsType extends React.HTMLAttributes<HTMLElement> {
  title?: string 
  show?: boolean
  toggle?: Function
  cancelOnOutsideClick?: boolean,
  top?: any,
  body?: any,
  bottom?: any
}