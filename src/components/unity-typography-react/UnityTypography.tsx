import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-core/unity-typography'

export default class UnityTypography extends Component<typographyProps> {
  render() {
    const {
      children,
      monospace,
      ...otherProps
    } = this.props
    
    const typographyProps : typographyProps = {...otherProps}
    if (monospace) typographyProps.monospace = monospace

    return (
      <unity-typography
        {...otherProps}
      >
        {children}
      </unity-typography>
    )
  }
}

export type colorTypes = 'black' | 'dark' | 'medium' | 'light'
export type sizeTypes = 'header1' | 'header2' | 'paragraph' | 'medium' | 'small'

export type headerStyleTypes = React.CSSProperties & { 
'--font-face'?: string,
'--monospace-font-face'?: string,
'--font-color-light'?: string,
'--font-color-medium'?: string,
'--font-color-dark'?: string,
'--font-color-black'?: string,
'--header1-size'?: string,
'--header2-size'?: string,
'--paragraph-size'?: string,
'--medium-size'?: string,
'--small-size'?: string,
'--header1-weight'?: string,
'--header2-weight'?: string,
'--paragraph-weight'?: string,
'--medium-weight'?: string,
'--small-weight'?: string,
'--font-size'?: string
}

export interface typographyProps {
  color?: colorTypes,
  size?: sizeTypes,
  weight?: sizeTypes,
  style?: headerStyleTypes,
  monospace?: boolean
}