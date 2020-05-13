declare namespace JSX {
  interface IntrinsicElements {
    "unity-page-header": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-page-header' {
  export interface pageHeaderProps {
    title?: string,
    tabs?: object,
    selectedTab?: string,
    leftContent?: any,
    centerContent?: any,
    rightContent?: any,
    style?: React.CSSProperties,
    onTabSelect?: Function
  }
}
