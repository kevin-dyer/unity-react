declare namespace JSX {
  interface IntrinsicElements {
    "unity-table-export": any;
    "unity-button": any;
  }
}

interface RefObject {
  current: null | Object
}

declare module '@bit/smartworks.unity.unity-table-export' {
  export interface ExportButtonProps extends React.HTMLAttributes<HTMLElement> {
    // unity-table-export props
    tableRef?: RefObject,
    onExport?: Function,
    // unity-button props
    label?: String,
    leftIcon?: String,
    rightIcon?: String,
    centerIcon?: String,
    type?: String,
    danger?: Boolean,
    loading?: Boolean,
    small?: Boolean,
    // click?: Function,
    style?: ExportButtonStyles
  }

  export interface ExportButtonStyles extends React.CSSProperties {
    container?: React.CSSProperties
    '--button-color'?: string,
    '--gradient-background'?: string,
    '--font-color'?: string,
    '--font-size'?: string,
    '--font-weight'?: string,
    '--iron-icon-width'?: string,
    '--iron-icon-height'?: string,
  }
}
