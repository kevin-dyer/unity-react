declare namespace JSX {
  interface IntrinsicElements {
    "unity-global-nav-base": any;
  }
}

declare module '@bit/smartworks.unity.unity-global-nav-base' {
  import CSSProperties from 'react'

  export interface NavItem {
    key: string,
    label: string,
    short?: boolean,
    icon?: string,
    children?: NavItem[]
  }
  export interface NavItemsConfig {
    top?: NavItem[],
    bottom?: NavItem[]
  }
  export interface NavProps {
    gutter?: Boolean,
    logo?: String,
    selected?: String,
    collapsible?: Boolean,
    collapsed?: Boolean,
    items?: NavItemsConfig,
    onSelect?: Function,
    children?: any,
    styles?: NavStyles
  }
  export interface NavStyles {
    container: React.CSSProperties
  }
}