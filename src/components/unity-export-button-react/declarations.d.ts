declare namespace JSX {
  interface IntrinsicElements {
    "unity-table-export": any;
    "unity-button": any;
  }
}

declare module '@bit/smartworks.unity.unity-table-export' {
  export interface ExportButtonProps {
    // unity-table-export props
    tableRef?: UnityTable,
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
  }
  export interface ExportButtonStyles {
    container: React.CSSProperties
  }
}
