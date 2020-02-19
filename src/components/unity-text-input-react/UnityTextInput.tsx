import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-text-input'

interface TextInputProps {
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


export default class UnityTextInput extends Component<TextInputProps> {

  private inputRef = React.createRef<TextInputProps>()

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
      value='',
      label='',
      remark='',
      units='',
      placeholder='',
      error='',
      disabled=false,
      time=false,
      password=false,
      charCount=false,
      showIcon=false,
      onKeyDown,
      onBlur,
      onDragStart,
      onDrop,
      onFocus,
      hideBorder,
      rounded,
      innerLeftIcon,
      innerRightIcon,
      style
    } = this.props
    let inputProps : TextInputProps = {
      value,
      label,
      units,
      placeholder,
      innerLeftIcon,
      innerRightIcon
    }

    if (!!error) inputProps.error = error
    if (!!remark) inputProps.remark = remark
    if (!!disabled) inputProps.disabled = disabled
    if (!!time) inputProps.time = time
    if (!!password) inputProps.password = password
    if (!!charCount) inputProps.charCount = charCount
    if (!!showIcon) inputProps.showIcon = showIcon
    if (!!onKeyDown) inputProps.onKeyDown = onKeyDown
    if (!!onBlur) inputProps.onBlur = onBlur
    if (!!onDragStart) inputProps.onDragStart = onDragStart
    if (!!onDrop) inputProps.onDrop = onDrop
    if (!!onFocus) inputProps.onFocus = onFocus
    if (!!hideBorder) inputProps.hideBorder = hideBorder
    if (!!rounded) inputProps.rounded = rounded

    return <unity-text-input
      style={style}
      ref={this.inputRef}
      {...inputProps}
    >
    </unity-text-input>
  }
}
