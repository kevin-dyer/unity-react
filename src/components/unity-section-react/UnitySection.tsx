import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-core/unity-section'
import { sectionPropsType } from '@bit/smartworks.unity.unity-core/unity-section'

export default class UnitySection extends Component<sectionPropsType> {
  render() {
    const {
      children,
      bordered,
      nowrap,
      style
    } = this.props
    let sectionProps = {
      bordered,
      nowrap,
      style
    }

    if (!sectionProps.bordered) delete sectionProps.bordered
    if (!sectionProps.nowrap) delete sectionProps.nowrap
    if (!sectionProps.style) delete sectionProps.style

    return (<unity-section
      {...sectionProps}
    >
      {children}
    </unity-section>)
  }
}
