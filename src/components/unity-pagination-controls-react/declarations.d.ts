declare namespace JSX {
  interface IntrinsicElements {
    "unity-pagination-controls": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-pagination-controls' {
  export interface paginationControlsProps {
    id?: string,
    itemsPerPage?: number,
    hasPrevPage?: boolean,
    hasNextPage?: boolean,
    onFirstPageClick?: Function,
    onPrevPageClick?: Function,
    onNextPageClick?: Function,
    onItemsPerPageUpdate?: Function,
    style?: React.CSSProperties
  }
}
