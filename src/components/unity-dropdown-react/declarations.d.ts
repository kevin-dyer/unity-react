declare namespace JSX {
  interface IntrinsicElements {
    "unity-dropdown": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-dropdown' {
  export type inputType = "menu" | "single-select" | "multi-select"
  export type boxType = "label" | "search" | "button-gradient" | "button-outlined" | "inline"
  import CSSProperties from 'react'
  export interface dropdownPropsType {
    [key: string]: any;
    label?: string,
    inputType?: inputType,
    boxType?: boxType,
    placeholder?: string,
    options?: Object[] | string,
    selected?: string[] | string,
    disabled?: boolean,
    onMenuClick?: Function,
    selectIcon?: boolean,
    helperText?: string,
    searchBox?: boolean,
    showTags?: boolean,
    onValueChange?: Function
  }
}
