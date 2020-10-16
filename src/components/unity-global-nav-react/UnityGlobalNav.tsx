import React, { CSSProperties, Component, HTMLAttributes, SyntheticEvent } from 'react'
import '@bit/smartworks.unity.unity-core/unity-global-nav-base'
 
export interface NavItemI {
 key: string
 label: string
 short?: boolean
 icon?: string
 children?: NavItemI[]
 disabled?: boolean
}
export interface NavItemsConfigI {
 top?: NavItemI[]
 bottom?: NavItemI[]
}
export interface NavPropsI extends HTMLAttributes<HTMLElement> {
 gutter?: boolean
 logo?: string
 selected?: string
 collapsible?: boolean
 collapsed?: boolean
 items?: NavItemsConfigI
 onSelect?: ((event: SyntheticEvent<HTMLElement, Event>) => void) // this seems to be the correct type for extending HTMLAttributes
 header?: string
 headerImg?: string
 grid?: boolean
 children?: any
 style?: NavStyles
 customHeader?: any,
 customCollapsibleContent?: any
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
 
export default class UnityGlobalNav extends Component<NavPropsI> {
 private navRef = React.createRef<NavPropsI>()
 componentDidMount = () => {
   this.updateProps({})
 }
 
 componentDidUpdate = (oldProps : NavPropsI) => {
   this.updateProps(oldProps)
 }
 
 makeCollapsibleContent = () => {
   const {
     collapsed,
     customCollapsibleContent
   } : NavPropsI = this.props
 
   if (!collapsed) {
     return (
       <span slot="customCollapsibleContent">
         {customCollapsibleContent}
       </span>
     )
   }
 }
 
 
 
 
 
 updateProps = (oldProps={}) => {
   const {
     items={},
     onSelect,
     customHeader,
     customCollapsibleContent
   } : NavPropsI = this.props
   const {
     items: oldItems,
     onSelect: oldOnSelect,
     customHeader: oldCustomHeader,
     customCollapsibleContent: oldCustomCollapsibleContent
   } : NavPropsI = oldProps
   const nav = this.navRef.current
 
   if (!!nav) {
     if (items !== oldItems) {
       nav.items = items
     }
 
     if (onSelect !== oldOnSelect) {
       nav.onSelect = onSelect
     }
 
     if (customHeader !== oldCustomHeader) {
       nav.customHeader = customHeader
     }
 
     if (customCollapsibleContent !== oldCustomCollapsibleContent) {
       nav.customCollapsibleContent = customCollapsibleContent
     }
   }
 }
 
 render() {
   const {
     gutter,
     collapsible,
     collapsed,
     grid,
     style: stylesProp,
     items,
     onSelect,
     customHeader,
     customCollapsibleContent,
     ...otherProps
   } : NavPropsI = this.props
   let sideNavProps : NavPropsI = otherProps
   if (!!gutter) sideNavProps.gutter = gutter
   if (!!collapsible) sideNavProps.collapsible = collapsible
   if (!!collapsed) sideNavProps.collapsed = collapsed
   if (!!grid) sideNavProps.grid = grid
 
   return (
     <unity-global-nav-base
       ref={this.navRef}
       style={stylesProp}
       {...sideNavProps}
     >
       {!!customHeader &&
         <span slot="customHeader">
           {customHeader}
         </span>}
       {!!customCollapsibleContent &&       
           <span slot="customCollapsibleContent">
           {customCollapsibleContent}
         </span>}
     </unity-global-nav-base>
   )
 }
}
 
// const styles : NavStylesI = { zIndex: 10 }
