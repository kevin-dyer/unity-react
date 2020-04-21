import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-dropzone'
import { dropzonePropTypes } from '@bit/smartworks.unity.unity-dropzone'

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
      accept,
      dropzoneText,
      invalidText,
      disabled,
      hideIcon
    } : dropzonePropTypes = this.props

    let dropzoneProps : dropzonePropTypes = { accept, dropzoneText, invalidText}
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
