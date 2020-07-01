declare namespace JSX {
  interface IntrinsicElements {
    "unity-page-header": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-page-header' {
  export interface pageHeaderProps {
    header?: string,
    tabs?: object,
    selectedTab?: string,
    leftContent?: any,
    centerContent?: any,
    leftAction?: any,
    rightAction?: any,
    style?: React.CSSProperties,
    onTabSelect?: Function
  }
}
