import { CSSProperties } from "react";

declare namespace JSX {
  interface IntrinsicElements {
    "unity-section": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-section' {
  export interface SectionPropsI {
    bordered?: boolean,
    nowrap?: boolean,
    style?: CSSProperties & {
      '--section-color': string,
      '--border-color': string,
      '--horz-position': string,
      '--vert-pos': string
    }
  }
}
