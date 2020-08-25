import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-dropdown'

export default class UnityDropdown extends Component<dropdownPropsType> {
  private dropdownRef = React.createRef<dropdownPropsType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: dropdownPropsType) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: dropdownPropsType={}) {
    const {
      onMenuClick,
      onValueChange,
    } = this.props

    const {
      onMenuClick: oldOnMenuClick,
      onValueChange: oldOnValueChange
    } = oldProps

    const unityDropdown = this.dropdownRef.current
    if (unityDropdown) {
      if (oldOnMenuClick !== onMenuClick) unityDropdown.onMenuClick = onMenuClick
      if (oldOnValueChange !== onValueChange) unityDropdown.onValueChange = onValueChange
    }
  }

  render() {
    const {
      options=[],
      selected=[],
      disabled,
      important,
      bottomContent,
      ...otherProps
    } = this.props
    const dropdownProps : dropdownPropsType = {
      options: JSON.stringify(options),
      selected: JSON.stringify(selected),
      ...otherProps
    }
    if (disabled) dropdownProps.disabled = true
    if (important) dropdownProps.important = true
    return (
      <unity-dropdown
        ref={this.dropdownRef}
        {...dropdownProps}
      >
        {!!bottomContent &&
          <div slot="bottom-content">
            {bottomContent}
          </div>
        }
      </unity-dropdown>
    )
  }
}

export type inputType = "menu" | "single-select" | "multi-select"
export type boxType = "label" | "search" | "button-primary" | "button-secondary" | "button-borderless" | "inline"
export interface dropdownPropsType extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any
  label?: string
  inputType?: inputType
  boxType?: boxType
  important?: boolean
  placeholder?: string
  options?: Object[] | string
  selected?: string[] | string
  disabled?: boolean
  onMenuClick?: Function
  selectIcon?: boolean
  helperText?: string
  searchBox?: boolean
  showTags?: boolean
  onValueChange?: Function
  rightAlign?: boolean
  style?: dropdownStyleTypes
  bottomContent?: any
}

export type dropdownStyleTypes = React.CSSProperties & {
  '--dropdown-background-color'?: string
  '--dropdown-background-color-disabled'?: string
  '--dropdown-border-color'?: string
  '--dropdown-border-color-disabled'?: string
  '--dropdown-checkbox-unchecked-color'?:string
  '--dropdown-color'?: string
  '--dropdown-color-dark'?: string
  '--dropdown-input-font'?: string
  '--dropdown-color-light'?: string
  '--dropdown-label-color'?: string
  '--dropdown-line-height'?: string | number
  '--dropdown-options-box-width'?: string | number
  '--dropdown-text-color'?: string
  '--dropdown-text-size'?: string | number

}
