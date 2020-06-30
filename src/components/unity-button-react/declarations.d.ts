declare namespace JSX {
  interface IntrinsicElements {
    "unity-button": any;
  }
}
declare module '@bit/smartworks.unity.unity-core/unity-button' {
  export type buttonType = 'primary' | 'ssecondary' | 'borderless'
  export interface buttonPropsType {
    [key: string]: any;
    label?: string;
    leftIcon?: string;
    rightIcon?: string;
    centerIcon?: string;
    type?: buttonType;
    important?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: Function;
    styles?: object;
  }
}
