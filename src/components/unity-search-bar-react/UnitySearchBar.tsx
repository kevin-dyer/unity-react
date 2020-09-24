import React, {
  Component,
  CSSProperties,
  HTMLAttributes
} from 'react'

import '@bit/smartworks.unity.unity-core/unity-search-bar'

export interface searchPropsType extends Omit<Omit<HTMLAttributes<HTMLElement>, 'onChange'>, 'onClick'>  {
  [key: string]: any
  search?: string
  tagSeed?: Object[]
  tags?: Object[]
  onChange?: Function
  debounceTime?: number
  style?: searchStyles
}

export type searchStyles = CSSProperties & {
  '--input-font'?: string
  '--input-text-color'?: string
  '--input-text-size'?: string
  '--input-icon-color'?: string
  '--input-border-color'?: string
  '--input-border-hover-color'?: string
  '--input-border-focus-color'?: string
  '--input-border-radius'?: string
  '--search-bar-height'?: string
}

export default class UnitySearchBar extends Component<searchPropsType> {
  private searchRef = React.createRef<searchPropsType>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate = () => {
    this.updateProperties()
  }

  updateProperties = () => {
    const { searchRef, props }  = this
    const unitySearchBar = searchRef.current
    const { tagSeed, tags, onChange } = props
    if (unitySearchBar) {
      if (tagSeed) unitySearchBar.tagSeed = tagSeed
      if (tags) unitySearchBar.tags = tags
      if (onChange) unitySearchBar.onChange = onChange
    }
  }

  render() {
    const { search, debounceTime, style } = this.props
    const searchProps : searchPropsType = {search, debounceTime, style}

    return (
      <unity-search-bar
        ref={this.searchRef}
        {...searchProps}
      ></unity-search-bar>
    )
  }
}
