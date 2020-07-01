declare namespace JSX {
  interface IntrinsicElements {
    "unity-column-editor": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-column-editor' {
  //NOTE: I could not figure out how to import buttonPropsType from unity-button-react
  type buttonType = 'primary' | 'secondary' | 'borderless'
  interface ButtonProps {
    label?: string;
    leftIcon?: string;
    rightIcon?: string;
    centerIcon?: string;
    type?: buttonType;
    important?: boolean;
    loading?: boolean;
    disabled?: boolean;
    styles?: object;
  }
  export interface ColumnEditorProps {
    columns?: Object[],
    selectedColumns?: Object[],
    onUpdate?: Function,
    buttonProps?: ButtonProps
  }
  export interface ColumnEditorStyles {
    container: React.CSSProperties
  }
}

