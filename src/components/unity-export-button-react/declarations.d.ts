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
    '--button-color'?: string | number,
    '--gradient-background'?: string | number,
    '--font-color'?: string | number,
    '--font-size'?: string | number,
    '--font-weight'?: string | number,
    '--iron-icon-width'?: string | number,
    '--iron-icon-height'?: string | number,
  }
}
