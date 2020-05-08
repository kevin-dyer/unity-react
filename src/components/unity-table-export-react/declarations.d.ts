declare namespace JSX {
  interface IntrinsicElements {
    "unity-table-export": any
  }
}

interface RefObject {
  current: null | Object
}

declare module '@bit/smartworks.unity.unity-core/unity-table-export' {
  export interface ExportProps extends React.HTMLAttributes<HTMLElement> {
    // unity-table-export props
    tableRef?: RefObject,
    beforeExport?: Function,
    onExport?: Function,
    // click?: Function,
  }
}
