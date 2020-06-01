declare namespace JSX {
  interface IntrinsicElements {
    "unity-section": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-section' {
  export interface SectionPropsI {
    bordered?: boolean,
    nowrap?: boolean,
    style?: React.CSSProperties & {
      '--section-color'?: string,
      '--border-color'?: string,
      '--horz-pos'?: string,
      '--vert-pos'?: string,
    }
  }
}
