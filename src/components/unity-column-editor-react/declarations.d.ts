declare namespace JSX {
  interface IntrinsicElements {
    "unity-column-editor": any;
  }
}

declare module '@bit/smartworks.unity.unity-column-editor' {
  export interface ColumnEditorProps {
    columns?: Object[],
    selectedColumns?: Object[],
    onUpdate?: Function,
    buttonType?: string
  }
  export interface ColumnEditorStyles {
    container: React.CSSProperties
  }
}

