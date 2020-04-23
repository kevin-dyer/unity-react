import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-dropzone'

export default class UnityDropzone extends Component<dropzonePropTypes> {
  private dropzoneRef = React.createRef<dropzonePropTypes>()
  componentDidmount = () => {
    this.updateProps()
  }

  componentDidUpdate = () => {
    this.updateProps()
  }

  updateProps = () => {
    const { onUpload } : dropzonePropTypes = this.props
    const dropzone = this.dropzoneRef.current

    if (!!dropzone) {
      dropzone.onUpload = onUpload
    }
  }

  render() {
    const {
      disabled,
      hideIcon,
      ...otherProps
    } : dropzonePropTypes = this.props

    let dropzoneProps : dropzonePropTypes = { ...otherProps }
    if (!!disabled) dropzoneProps.disabled = disabled
    if (!!hideIcon) dropzoneProps.hideIcon = hideIcon

    return (
      <unity-dropzone
      ref={this.dropzoneRef}
       {...dropzoneProps}
     ></unity-dropzone>
    )
  }
}

export interface dropzonePropTypes extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any
  accept?: string
  disabled?: boolean
  hideIcon?: boolean
  dropzoneText?: string
  invalidText?: string
  onUpload?: Function
  style?: dropzoneStyleTypes
}

export type dropzoneStyleTypes = React.CSSProperties & {
  '--dropzone-color'?: string
  '--dropzone-min-width'?: string | number
  '--dropzone-min-height'?: string | number
  '--font-color'?: string
  '--icon-size'?: string | number
}
