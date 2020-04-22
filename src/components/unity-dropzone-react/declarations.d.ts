declare namespace JSX {
  interface IntrinsicElements {
    "unity-dropzone": any
  }
}
declare module '@bit/smartworks.unity.unity-dropzone' {
  export interface dropzonePropTypes extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any
    accept?: string
    disabled?: boolean
    hideIcon?: boolean
    dropzoneText?: string
    invalidText?: string
    onUpload?: Function
    style?: customStyles
  }
}
