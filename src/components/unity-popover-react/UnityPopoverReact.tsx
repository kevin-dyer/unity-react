import React, { Component, ReactElement, CSSProperties, HTMLAttributes } from 'react'

import '@bit/smartworks.unity.unity-core/unity-popover'

interface PopoverStylesI {
  '--popover-max-width'?: string,
  '--popover-min-width'?: string,
  '--popover-max-height'?: string,
  '--popover-min-height'?: string,
  '--popover-background-color'?: string,
  '--popover-shadow'?: string,
  '--popover-border'?: string,
  '--popover-close-button-color'?: string,
  '--popover-z-index'?: string
  '--popover-content-overflow'?: string
}

interface PopoverPropsI extends HTMLAttributes<HTMLElement> {
  withClose?: boolean,
  show?: boolean,
  closeOnOutsideClick? : boolean,
  flip?: boolean,
  preventOverflow?: boolean,
  placement?: string,
  distance?: number,
  onClose?: Function,
  fallbackPlacements?: Array<string>,
  boundary?: HTMLElement | ReactElement,
  referenceElement?: HTMLElement | ReactElement,
  onPageContent?: ReactElement,
  popoverContent?: ReactElement,
  style?: CSSProperties & PopoverStylesI
}

export default class UnityPopover extends Component<PopoverPropsI> {

  private _popoverRef = React.createRef<PopoverPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = (oldProps: PopoverPropsI) => {
    this.updateProperties(oldProps)
  }

  updateProperties = (oldProps: PopoverPropsI={}) => {
    const {
      _popoverRef,
      props: {
        distance,
        onClose,
        fallbackPlacements,
        boundary,
        referenceElement,
      }
    } = this
    const { current } = _popoverRef
    if (!!current) {
      if (!!distance && distance !== oldProps.distance) current.distance = distance
      if (!!onClose && onClose !== oldProps.onClose) current.onClose = onClose
      if (!!fallbackPlacements && fallbackPlacements !== oldProps.fallbackPlacements) current.fallbackPlacements = fallbackPlacements
      if (!!boundary && boundary !== oldProps.boundary) current.boundary = boundary
      if (!!referenceElement && referenceElement !== oldProps.referenceElement) current.referenceElement = referenceElement
    }
  }

  render() {
    const {
      withClose,
      show,
      closeOnOutsideClick,
      flip,
      preventOverflow,
      placement,
      onPageContent,
      popoverContent,
      ...otherProps
    } = this.props

    const boolProps: PopoverPropsI = {}
    if (withClose) boolProps.withClose = withClose
    if (show) boolProps.show = show
    if (closeOnOutsideClick) boolProps.closeOnOutsideClick = closeOnOutsideClick
    if (flip) boolProps.flip = flip
    if (preventOverflow) boolProps.preventOverflow = preventOverflow

    // Remove complex data from otherProps
    delete otherProps.onClose
    delete otherProps.fallbackPlacements
    delete otherProps.boundary
    delete otherProps.referenceElement

    return (
      <unity-popover
        ref={this._popoverRef}
        placement={placement}
        {...boolProps}
        {...otherProps}
      >
        {!!onPageContent && <div slot='on-page-content'>{onPageContent}</div>}
        <div slot='popover-content'>{popoverContent}</div>
      </unity-popover>
    )
  }
}