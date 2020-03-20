declare namespace JSX {
  interface IntrinsicElements {
    "unity-table": any;
  }
}

declare module '@bit/smartworks.unity.unity-table' {
  import CSSProperties from 'react'
  export interface TableProps {
    data?: Object[],
    columns?: TableColumn[],
    childKeys?: string[],
    keyExtractor?: Function,
    onClickRow?: Function,
    onSelectionChange?: Function,
    onDisplayColumnsChange?: Function,
    onColumnChange?: Function,
    selectable?: boolean,
    filter?: Object[],
    emptyText?: string,
    isLoading?: boolean,
    onEndReached?: Function,
    onHighlight?: Function,
    children?: Object[]
  }
  export interface TableStyles {
    container: React.CSSProperties
  }
  export interface TableColumn {
    key?: string,
    label?: string,
    formatLabel?: Function,
    renderCustomContent?: Function
  }
}