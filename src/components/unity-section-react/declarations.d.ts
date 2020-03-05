declare namespace JSX {
  interface IntrinsicElements {
    "unity-section": sectionPropsType;
  }
}

declare module '@bit/smartworks.unity.unity-section' {
  export interface sectionPropsType {
    bordered?: boolean,
    nowrap?: boolean,
    style?: object
  }
}
