import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-global-nav-base'
import {
  NavProps,
  NavStyles
} from '@bit/smartworks.unity.unity-global-nav-base'

/*
    Takes property.oject `items`
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

export default class UnityGlobalNav extends Component<NavProps> {
  private navRef = React.createRef<NavProps>()
  componentDidMount = () => {
    this.updateProps({})
  }

  componentDidUpdate = (oldProps : NavProps) => {
    this.updateProps(oldProps)
  }

  updateProps = (oldProps={}) => {
    const {
      items={},
      onSelect
    } : NavProps = this.props
    const {
      items: oldItems,
      onSelect: oldOnSelect
    } : NavProps = oldProps
    const nav = this.navRef.current

    if (!!nav) {
      if (items !== oldItems) {
        nav.items = items
      }

      if (onSelect !== oldOnSelect) {
        nav.onSelect = onSelect
      }
    }
  }

  render() {
    const {
      logo='',
      selected='',
      gutter,
      collapsible,
      collapsed,
      styles: stylesProp
    } : NavProps = this.props
    let sideNavProps : NavProps = { logo, selected }
    if (!!gutter) sideNavProps.gutter = gutter
    if (!!collapsible) sideNavProps.collapsible = collapsible
    if (!!collapsed) sideNavProps.collapsed = collapsed

    return <div style={{...styles.container, ...stylesProp}}>
      <unity-global-nav-base
        ref={this.navRef}
        {...sideNavProps}
      >
      </unity-global-nav-base>
    </div>
  }
}

const styles : NavStyles = {
  container: {
    zIndex: 10
  }
}
