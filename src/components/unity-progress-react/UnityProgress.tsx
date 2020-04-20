import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-progress'

export default class UnityProgress extends Component<progressPropsType> {

  render() {
    const {
      indeterminate,
      ...otherProps
    } = this.props

    const progressProps : progressPropsType = {...otherProps}
    if (indeterminate) progressProps.indeterminate = indeterminate

    return (
      <unity-progress
        {...progressProps}
      >
      </unity-progress>
    )
  }
}

export interface progressPropsType extends React.HTMLAttributes<HTMLElement> {
  label?: string
  remark?: string
  max?: number
  value?: number
  secondaryValue?: number
  indeterminate?: boolean
  completionType?: completionType
  style?: progressStyleTypes
}

export type completionType = 'percentage' | 'ratio'

export type progressStyleTypes = React.CSSProperties & {
  '--progress-color'?: string
  '--progress-secondary-color'?: string
  '--progress-height'?: string
  '--progress-indeterminate-cycle-duration'?: string
  '--remark-position'?: string
  '--completion-position'?: string
  '--completion-color'?: string
}
