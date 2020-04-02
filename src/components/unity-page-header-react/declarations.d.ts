declare namespace JSX {
  interface IntrinsicElements {
    "unity-page-header": any;
  }
}

declare module '@bit/smartworks.unity.unity-page-header' {
  export interface pageHeaderProps {
    title?: string,
    tabs?: object,
    selectedTab?: string,
    leftContent?: string,
    rightContent?: string,
    style?: React.CSSProperties,
    onTabSelect?: Function
  }
}
