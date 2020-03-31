declare namespace JSX {
  interface IntrinsicElements {
    "unity-toggle-switch": any;
  }
}

declare module '@bit/smartworks.unity.unity-toggle-switch' {
  import CSSProperties from 'react'
  export interface toggleSwitchType {
    value: boolean,
    label?: string,
    onLabel?: string,
    offLabel?: string,
    remark?: string,
    disabled?: boolean,
    onChange?: Function,
  }
}
