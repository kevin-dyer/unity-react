declare namespace JSX {
  interface IntrinsicElements {
    "unity-table": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-table' {
  import CSSProperties from 'react'
  export interface TableProps {
    data?: Object[],
    columns?: TableColumn[],
    selected?: string[];
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
    children?: Object[],
    highlightedRow?: string,
    endReachedThreshold?: number,
    noTopBorder?: boolean
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
