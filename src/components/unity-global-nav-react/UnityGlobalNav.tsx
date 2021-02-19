import React, { CSSProperties, Component, HTMLAttributes, ReactNode } from 'react'
import '@bit/smartworks.unity.unity-core/unity-global-nav-base'

export interface NavItemI {
  key: string
  label: string
  short?: boolean
  icon?: string
  children?: NavItemI[]
  disabled?: boolean
  borderWhenClosed?: boolean
}
export interface NavItemsConfigI {
  top?: NavItemI[]
  bottom?: NavItemI[]
}

export type OpenStatesT = {
  [itemKey: string]: boolean
}

export interface NavPropsI extends HTMLAttributes<HTMLElement> {
  gutter?: boolean
  logo?: string
  selected?: string
  collapsible?: boolean
  collapsed?: boolean
  items?: NavItemsConfigI
  onSelect?: (key: any) => void // this seems to be the correct type for extending HTMLAttributes
  header?: string
  headerImg?: string
  grid?: boolean
  children?: any
  style?: NavStyles
  customHeader?: ReactNode,
  customExpandedHeader?: ReactNode,
  subHeader?: ReactNode,
  subHeaderBorder?: boolean,
  onToggleCollapse?: (collapsed: boolean) => void,
  onOpenStateChange?: (openStates: OpenStatesT, key?: string, openState?: boolean) => void,
  openStates?: OpenStatesT,
  alwaysShowBordersTop?: boolean
  alwaysShowBordersBottom?: boolean
  bubbleBottomItems?: boolean
  selectFirstChildOnExpand?: boolean
}

export type NavStyles = CSSProperties & {
  '--primary-menu-color'?: string
  '--gutter-color'?: string
  '--logo-height'?: string
  '--global-nav-background-color'?: string
  '--global-nav-border-color'?: string
  '--global-nav-margin-size'?: string
  '--global-nav-padding-size'?: string
  '--global-nav-padding-size-sm'?: string
  '--global-nav-highlight-color'?: string
  '--global-nav-hover-color'?: string
  '--global-nav-text-color'?: string
  '--global-nav-light-text-color'?: string
  '--global-nav-gutter-color'?: string
  '--global-nav-header-font-size'?: string
  '--global-nav-font-size'?: string
  '--global-nav-short-row'?: string
  '--global-nav-large-row'?: string
  '--global-nav-expanded-width'?: string
  '--global-nav-collapsed-width'?: string
  '--global-nav-logo-size'?: string
  '--global-nav-menu-shadow'?: string
}
/*
  Takes property.object `items`
  This is an object with a top and bottom object attributes.
  Top is an array that controls the top aligned items
  Each index is an item.object:
    {
      key: '',
      label: '',
      icon: '',
      selected: bool,
      onSelect: ()=>{},
      children: [{item.object}, ...]
    }
  `item.children` is as above, but lacks the children property.
  If an item.object has a `children` array of non-Zero size, onSelect is ignored
*/

export default class UnityGlobalNav extends Component<NavPropsI> {
  private navRef = React.createRef<NavPropsI>()
  componentDidMount = () => {
    this.updateProps({})
  }

  componentDidUpdate = (oldProps : NavPropsI) => {
    this.updateProps(oldProps)
  }

  updateProps = (oldProps={}) => {
    const {
      items={},
      onSelect,
      onToggleCollapse,
      onOpenStateChange,
      openStates,
    } : NavPropsI = this.props
    const {
      items: oldItems,
      onSelect: oldOnSelect,
      onToggleCollapse: oldOnToggleCollapse,
      onOpenStateChange: oldOnOpenStateChange,
      openStates: oldOpenStates,
    } : NavPropsI = oldProps
    const nav = this.navRef.current
 
    if (!!nav) {
      if (items !== oldItems) {
        nav.items = items
      }
 
      if (onSelect !== oldOnSelect) {
        nav.onSelect = onSelect
      }

      if (onToggleCollapse !== oldOnToggleCollapse) {
        nav.onToggleCollapse = onToggleCollapse
      }

      if (onOpenStateChange !== oldOnOpenStateChange) {
        nav.onOpenStateChange = onOpenStateChange
      }

      if (openStates !== oldOpenStates) {
          nav.openStates = openStates
      }

    }
  }
 
  render() {
    const {
      gutter,
      collapsible,
      collapsed,
      grid,
      subHeaderBorder,
      alwaysShowBordersTop,
      alwaysShowBordersBottom,
      bubbleBottomItems,
      style: stylesProp,
      items,
      onSelect,
      customHeader,
      customExpandedHeader,
      subHeader,
      onToggleCollapse,
      ...otherProps
    } : NavPropsI = this.props
    let sideNavProps : NavPropsI = otherProps
    if (!!gutter) sideNavProps.gutter = gutter
    if (!!collapsible) sideNavProps.collapsible = collapsible
    if (!!collapsed) sideNavProps.collapsed = collapsed
    if (!!grid) sideNavProps.grid = grid
    if (!!subHeaderBorder) sideNavProps.subHeaderBorder = subHeaderBorder
    if (!!alwaysShowBordersTop) sideNavProps.alwaysShowBordersTop = alwaysShowBordersTop
    if (!!alwaysShowBordersBottom) sideNavProps.alwaysShowBordersBottom = alwaysShowBordersBottom
    if (!!bubbleBottomItems) sideNavProps.bubbleBottomItems = bubbleBottomItems
  
    return (
      <unity-global-nav-base
        ref={this.navRef}
        style={stylesProp}
        {...sideNavProps}
      >
        {!!customHeader &&
          <span slot="customHeader">
            {customHeader}
          </span>
        }
        {!!customExpandedHeader &&
          <span slot="customExpandedHeader">
            {customExpandedHeader}
          </span>
        }
        {!!subHeader &&
          <span slot="subHeader">
            {subHeader}
          </span>
        }
      </unity-global-nav-base>
    )
  }
}

// const styles : NavStylesI = { zIndex: 10 }
