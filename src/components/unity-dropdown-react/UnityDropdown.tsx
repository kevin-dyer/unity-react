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
      options,
      selected,
      onMenuClick,
      onValueChange,
    } = this.props

    const {
      options: oldOptions,
      selected: oldSelected,
      onMenuClick: oldOnMenuClick,
      onValueChange: oldOnValueChange
    } = oldProps

    const unityDropdown = this.dropdownRef.current
    if (unityDropdown) {
      if (oldOnMenuClick !== onMenuClick) unityDropdown.onMenuClick = onMenuClick
      if (oldOnValueChange !== onValueChange) unityDropdown.onValueChange = onValueChange
      if(oldOptions !== options) unityDropdown.options = options
      if(oldSelected !== selected) unityDropdown.selected = selected
    }
  }

  render() {
    const {
      // boolean props
      autofocus,
      disabled,
      important,
      rightAlign,
      searchBox,
      selectIcon,
      showTags,
      // function/object props
      bottomContent,
      onMenuClick,
      onValueChange,
      options,
      selected,
      ...otherProps
    } = this.props

    const dropdownProps : dropdownPropsType = { ...otherProps }

    if (autofocus) dropdownProps.autofocus = true
    if (disabled) dropdownProps.disabled = true
    if (important) dropdownProps.important = true
    if (rightAlign) dropdownProps.rightAlign = true
    if (searchBox) dropdownProps.searchBox = true
    if (selectIcon) dropdownProps.selectIcon = true
    if (showTags) dropdownProps.showTags = true
    
    return (
      <unity-dropdown
        ref={this.dropdownRef}
        {...dropdownProps}
      >
        {!!bottomContent &&
          <div slot="bottom-content" style={{margin: 0, padding: 0}}>
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

  boxType?: boxType
  helperText?: string
  inputType?: inputType
  label?: string
  placeholder?: string
  style?: dropdownStyleTypes

  autofocus?: boolean
  disabled?: boolean
  important?: boolean
  rightAlign?: boolean
  searchBox?: boolean
  selectIcon?: boolean
  showTags?: boolean

  bottomContent?: any
  onMenuClick?: Function
  onValueChange?: Function
  options?: Object[] | string
  selected?: string[] | string
}

export type dropdownStyleTypes = React.CSSProperties & {
  '--dropdown-background-color'?: string
  '--dropdown-background-color-disabled'?: string
  '--dropdown-border-color'?: string
  '--dropdown-border-color-disabled'?: string
  '--dropdown-checkbox-unchecked-color'?: string
  '--dropdown-color'?: string
  '--dropdown-color-dark'?: string
  '--dropdown-input-font'?: string
  '--dropdown-color-light'?: string
  '--dropdown-label-color'?: string
  '--dropdown-line-height'?: string
  '--dropdown-options-box-width'?: string
  '--dropdown-text-color'?: string
  '--dropdown-text-size'?: string
  '--dropdown-width'?: string
  '--dropdown-border-radius'?: string
  '--dropdown-search-input-padding'?: string
}
