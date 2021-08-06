import React, { Component, CSSProperties, HTMLAttributes } from 'react'
import '@bit/smartworks.unity.unity-core/unity-pagination-controls'

export interface paginationControlsProps extends HTMLAttributes<HTMLElement>{
  id?: string,
  itemsPerPage?: number,
  hasPrevPage?: boolean,
  hasNextPage?: boolean,
  onFirstPageClick?: Function,
  onPrevPageClick?: Function,
  onNextPageClick?: Function,
  onItemsPerPageUpdate?: Function,
  style?: paginationControlsStylesTypes
}

export type paginationControlsStylesTypes = CSSProperties & {

}

//React component to wrap unity-page-header web component
export default class UnityPaginationControls extends Component<paginationControlsProps> {

  private headerRef = React.createRef<paginationControlsProps>()

  componentDidMount() {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: paginationControlsProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: paginationControlsProps={}) {
    const {
      onFirstPageClick: oldOnFirstPageClick,
      onPrevPageClick: oldOnPrevPageClick,
      onNextPageClick: oldOnNextPageClick,
      onItemsPerPageUpdate: oldOnItemsPerPageUpdate
    } = oldProps
    const {
      onFirstPageClick,
      onPrevPageClick,
      onNextPageClick,
      onItemsPerPageUpdate
    } = this.props
    const headerElement = this.headerRef.current

    if (!headerElement) return

    if (oldOnFirstPageClick !== onFirstPageClick) {
      headerElement.onFirstPageClick = onFirstPageClick
    }
    if (oldOnPrevPageClick !== onPrevPageClick) {
      headerElement.onPrevPageClick = onPrevPageClick
    }
    if (oldOnNextPageClick !== onNextPageClick) {
      headerElement.onNextPageClick = onNextPageClick
    }
    if (oldOnItemsPerPageUpdate !== onItemsPerPageUpdate) {
      headerElement.onItemsPerPageUpdate = onItemsPerPageUpdate
    }
  }

  render() {
    const {
      id,
      itemsPerPage,
      hasPrevPage,
      hasNextPage,
      style
    } = this.props
    const propsToAdd: paginationControlsProps = {id, itemsPerPage, style} 

    if (hasPrevPage) propsToAdd.hasPrevPage = true
    if (hasNextPage) propsToAdd.hasNextPage = true

    return <unity-pagination-controls
      ref={this.headerRef}
      {...propsToAdd}
    >
    </unity-pagination-controls>
  }
}
