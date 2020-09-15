import React, { Component, CSSProperties } from 'react'
import '@bit/smartworks.unity.unity-core/unity-text-input'

export interface TextInputPropsI {
  [key: string]: any

  error?: string
  hint?: string
  innerLeftIcon?: string
  innerRightIcon?: string
  label?: string
  maxlength?: number
  maxLines?: number
  minLines?: number
  placeholder?: string
  remark?: string
  style?: TextInputStyles
  units?: string
  value?: string

  area?: boolean
  autofocus?: boolean
  borderEffects?: boolean
  charCount?: boolean
  disabled?: boolean
  dirty?: boolean
  hideBorder?: boolean
  password?: boolean
  readOnly?: boolean
  required?: boolean
  rounded?: boolean
  showIcon?: boolean
  time?: boolean

  onChange?: Function
  validation?: Function
}

export type TextInputStyles = CSSProperties & {
  '--input-font'?: string
  '--input-label-color'?: string
  '--input-text-color'?: string
  '--input-text-size'?: string
  '--input-small-text-size'?: string
  '--input-dirty-color'?: string
  '--input-border-color'?: string
  '--input-border-hover-color'?: string
  '--input-border-focus-color'?: string
  '--input-border-readOnly-color'?: string
  '--input-border-error-color'?: string
  '--input-background-error-color'?: string
  '--input-border-disabled-color'?: string
  '--input-background-disabled-color'?: string
  '--input-icon-hint-color'?: string
  '--input-icon-valid-color'?: string
  '--input-icon-error-color'?: string
  '--inner-icon-size'?: string
}
export default class UnityTextInput extends Component<TextInputPropsI> {

  private inputRef = React.createRef<TextInputPropsI>()

  componentDidMount = () => {
    const { onChange } = this.props
    const inputElement = this.inputRef.current
    if (inputElement && !!onChange && onChange instanceof Function) inputElement.onChange = onChange
  }

  componentDidUpdate = () => {
    const { validation } = this.props
    const inputElement = this.inputRef.current
    if (inputElement) { 
      inputElement.validation = validation 
    }
  }

  render() {
    const {
      // boolean props
      area,
      autofocus,
      borderEffects,
      charCount,
      dirty,
      disabled,
      hideBorder,
      password,
      readOnly,
      required,
      rounded,
      showIcon,
      time,
      // function/object props
      onChange,
      validation,
      // string/number props
      ...otherProps } = this.props

    const inputProps : TextInputPropsI = {...otherProps}

    if (area) inputProps.area = true
    if (autofocus) inputProps.autofocus = true
    if (borderEffects) inputProps.borderEffects = true
    if (charCount) inputProps.charCount = true
    if (dirty) inputProps.dirty = true
    if (disabled) inputProps.disabled = true
    if (hideBorder) inputProps.hideBorder = true
    if (password) inputProps.password = true
    if (readOnly) inputProps.readOnly = true
    if (required) inputProps.required = true
    if (rounded) inputProps.rounded = true
    if (showIcon) inputProps.showIcon = true
    if (time) inputProps.time = true

    return <unity-text-input
      ref={this.inputRef}
      {...inputProps}
    >
    </unity-text-input>
  }
}
