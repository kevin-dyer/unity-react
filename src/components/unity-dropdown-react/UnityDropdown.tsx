import React, { Component } from 'react'

import '@bit/smartworks.unity.unity-core/unity-dropdown'

export default class UnityDropdown extends Component<DropdownPropsI> {
  private dropdownRef = React.createRef<DropdownPropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: DropdownPropsI) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: DropdownPropsI={}) {
    const {
      options,
      selected,
      onMenuClick,
      onValueChange,
      onExpandedChange
    } = this.props

    const {
      options: oldOptions,
      selected: oldSelected,
      onMenuClick: oldOnMenuClick,
      onValueChange: oldOnValueChange,
      onExpandedChange: oldOnExpandedChange
    } = oldProps

    const unityDropdown = this.dropdownRef.current
    if (unityDropdown) {
      if (oldOnMenuClick !== onMenuClick) unityDropdown.onMenuClick = onMenuClick
      if (oldOnValueChange !== onValueChange) unityDropdown.onValueChange = onValueChange
      if (oldOnExpandedChange !== onExpandedChange) unityDropdown.onExpandedChange = onExpandedChange
      if (oldOptions !== options) unityDropdown.options = options
      if (oldSelected !== selected) unityDropdown.selected = selected
    }
  }

  render() {
    const {
      // boolean props
      autofocus,
      disabled,
      expanded,
      important,
      rightAlign,
      searchBox,
      selectIcon,
      showCheckboxes,
      showTags,
      // function/object props
      bottomContent,
      onMenuClick,
      onValueChange,
      onExpandedChange,
      options,
      selected,
      ...otherProps
    } = this.props

    const dropdownProps : DropdownPropsI = { ...otherProps }

    if (autofocus) dropdownProps.autofocus = true
    if (disabled) dropdownProps.disabled = true
    if (expanded) dropdownProps.expanded = true
    if (important) dropdownProps.important = true
    if (rightAlign) dropdownProps.rightAlign = true
    if (searchBox) dropdownProps.searchBox = true
    if (selectIcon) dropdownProps.selectIcon = true
    if (showCheckboxes) dropdownProps.showCheckboxes = true
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
export interface DropdownPropsI extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any

  boxType?: boxType
  helperText?: string
  inputType?: inputType
  label?: string
  placeholder?: string
  style?: DropdownStylesT

  autofocus?: boolean
  disabled?: boolean
  important?: boolean
  rightAlign?: boolean
  searchBox?: boolean
  selectIcon?: boolean
  showCheckboxes?: boolean
  showTags?: boolean
  expanded?: boolean

  bottomContent?: any
  onMenuClick?: Function
  onValueChange?: Function
  onExpandedChange?: Function
  options?: Object[] | string
  selected?: string[] | string
}

export type DropdownStylesT = React.CSSProperties & {
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
