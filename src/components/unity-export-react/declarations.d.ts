declare namespace JSX {
  interface IntrinsicElements {
    "unity-table-export": any
  }
}

interface RefObject {
  current: null | Object
}

declare module '@bit/smartworks.unity.unity-table-export' {
  export interface ExportProps extends React.HTMLAttributes<HTMLElement> {
    // unity-table-export props
    tableRef?: RefObject,
    beforeExport?: Function,
    onExport?: Function,
    // click?: Function,
    style?: ExportStyles
  }

  export interface ExportStyles extends React.CSSProperties {
    '--button-color'?: string | number,
    '--gradient-background'?: string | number,
    '--font-color'?: string | number,
    '--font-size'?: string | number,
    '--font-weight'?: string | number,
    '--iron-icon-width'?: string | number,
    '--iron-icon-height'?: string | number,
  }
}
