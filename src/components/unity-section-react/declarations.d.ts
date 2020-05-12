declare namespace JSX {
  interface IntrinsicElements {
    "unity-section": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-section' {
  export interface sectionPropsType {
    bordered?: boolean,
    nowrap?: boolean,
    style?: object
  }
}
