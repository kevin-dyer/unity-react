declare namespace JSX {
  interface IntrinsicElements {
    "unity-text-input": any;
  }
}

declare module '@bit/smartworks.unity.unity-core/unity-text-input' {
  export interface TextInputProps {
    [key: string]: any,
    value?: string,
    onChange?: Function,
    label?: string,
    remark?: string,
    units?: string,
    placeholder?: string,
    error?: string,
    validation?: Function,
    disabled?: boolean,
    time?: boolean,
    maxlength?: number,
    hint?: string,
    password?: boolean,
    charCount?: boolean,
    showIcon?: boolean,
    onKeyDown?:string,
    onBlur?:string,
    onDragStart?:string,
    onDrop?:string,
    onFocus?:string,
    hideBorder?:boolean,
    rounded?:boolean,
    innerLeftIcon?:string,
    innerRightIcon?:string,
    style?:string,
    borderEffects?: boolean,
    area?: boolean,
    minLines?: number,
    maxLines?: number
  }
}