import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-text-input'
import { TextInputProps } from '@bit/smartworks.unity.unity-text-input'

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
    const {style, value, ...otherProps} = this.props
    const inputProps : TextInputProps = {value}
    for(const prop of Object.keys(otherProps)) {
      if(otherProps[prop]) inputProps[prop] = otherProps[prop]
    }

    return <unity-text-input
      style={style}
      ref={this.inputRef}
      {...inputProps}
    >
    </unity-text-input>
  }
}
