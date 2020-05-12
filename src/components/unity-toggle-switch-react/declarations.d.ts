declare namespace JSX {
  interface IntrinsicElements {
    "unity-toggle-switch": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-toggle-switch' {
  export interface toggleSwitchType {
    value?: boolean,
    label?: string,
    onLabel?: string,
    offLabel?: string,
    remark?: string,
    disabled?: boolean,
    onChange?: Function,
  }
}