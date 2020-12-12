declare namespace JSX {
  interface IntrinsicElements {
    "unity-checkbox": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-checkbox' {
  export interface CheckboxPropsI {
    label?: string,
    checked?: boolean,
    indeterminate?: boolean,
    disabled?: boolean,
    ignoreClicks?: boolean,
    onChange?: Function,
  }
}
