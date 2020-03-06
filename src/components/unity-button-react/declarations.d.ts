declare namespace JSX {
  interface IntrinsicElements {
    "unity-button": buttonPropsType;
  }
}
declare module '@bit/smartworks.unity.unity-button' {
  export type buttonType = 'gradient' | 'solid' | 'outlined'
  export interface buttonPropsType {
    [key: string];
    label?: string;
    leftIcon?: string;
    rightIcon?: string;
    centerIcon?: string;
    type?: buttonType;
    danger?: boolean;
    loading?: boolean;
    disabled?: boolean;
    small?: boolean;
    onClick?: Function;
  }
}

