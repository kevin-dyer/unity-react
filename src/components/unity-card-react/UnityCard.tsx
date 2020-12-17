import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-card'
import { CardPropsI } from '@bit/smartworks.unity.unity-core/unity-card'

export default class UnityCard extends Component<CardPropsI> {
  private cardRef = React.createRef<CardPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: CardPropsI) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: CardPropsI={}) {
    const {
      menuOptions,
      highlightedMenuOptions,
      onMenuClick,
      onClose
    } = this.props

    const {
      menuOptions: oldMenuOptions,
      highlightedMenuOptions: oldHighlighted,
      onMenuClick: oldOnMenuClick,
      onClose: oldOnClose
    } = oldProps

    const unityCard = this.cardRef.current
    if (unityCard) {
      // if (oldOnChange !== onChange) unityCard.onChange = onChange
      if (oldMenuOptions !== menuOptions) unityCard.menuOptions = menuOptions
      if (oldHighlighted !== highlightedMenuOptions) unityCard.highlightedMenuOptions = highlightedMenuOptions
      if (oldOnMenuClick !== onMenuClick) unityCard.onMenuClick = onMenuClick
      if (oldOnClose !== onClose) unityCard.onClose = onClose
    }
  }

  render() {
    const {
      menuButton,
      closeButton,
      hoverAnimation,
      borderless,
      centerContent,
      showMenu,
      closeOnMenuClick,
      ...otherProps
    } = this.props

    const cardProps : CardPropsI = otherProps

    if(menuButton) {
      cardProps.menuButton = menuButton
    }
    if(closeButton) {
      cardProps.closeButton = closeButton
    }
    if (hoverAnimation) {
      cardProps.hoverAnimation = hoverAnimation
    }
    if (borderless) {
      cardProps.borderless = borderless
    }
    if (centerContent) {
      cardProps.centerContent = centerContent
    }
    if (showMenu) {
      cardProps.showMenu = showMenu
    }
    if (closeOnMenuClick) {
      cardProps.closeOnMenuClick = closeOnMenuClick
    }

    return (
      <unity-card
        ref={this.cardRef}
        {...cardProps}
      ></unity-card>
    )
  }
}


export interface CardPropsI extends React.HTMLAttributes<HTMLElement> {
  title?: string,
  description?: string,
  image?: string,
  menuButton?: boolean,
  closeButton?: boolean,
  hoverAnimation?: boolean,
  borderless?: boolean,
  centerContent?: boolean,
  showMenu?: boolean,
  closeOnMenuClick?: boolean,
  menuOptions?: MenuOptionI[],
  highlightedMenuOptions?: string[],
  onMenuClick?: Function,
  onClose?: Function
}

export interface MenuOptionI {
    label?: string,
    icon?: string,
    comment?: string,
    submenu?: MenuOptionI,
    tag?: string,
    id?: string,
    tagStyles: React.CSSProperties
  }

export interface CardStylesI extends React.CSSProperties {
  '--card-border'?: string,
  '--card-hover-border'?: string,
  '--card-hover-box-color'?: string,
  '--card-hover-box-opacity'?: string | number,
  '--card-height'?: string | number,
  '--card-width'?: string | number,
  '--card-border-radius'?: string | number,
  '--card-menu-border-radius'?: string | number,
  '--card-icon-color'?: string,
  '--card-no-image-background'?: string
}
