import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-table-export'
import { ExportProps } from '@bit/smartworks.unity.unity-table-export'

export default class UnityExport extends Component<ExportProps> {

  private exportRef = React.createRef<ExportProps>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: ExportProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps={}) {
    const {
      tableRef,
      onExport
    } : ExportProps = this.props

    const {
      tableRef: oldTableRef,
      onExport: oldOnExport,
    } : ExportProps = oldProps

    const ref = this.exportRef.current
    if (!!ref) {
      if (oldTableRef !== tableRef) ref.tableRef = tableRef
      if (oldOnExport !== onExport) ref.onExport = onExport
    }
  }

  render() {
    const {
      label,
      leftIcon,
      rightIcon,
      centerIcon,
      type,
      danger,
      loading,
      small
    } = this.props

    const buttonProps : ExportProps = {}
    if (!!danger) buttonProps.danger = danger
    if (!!loading) buttonProps.loading = loading
    if (!!small) buttonProps.small = small

    return (
      <unity-table-export
        ref={this.exportRef}
      >
        <unity-button
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          centerIcon={centerIcon}
          type={type}
          {...buttonProps}
        ></unity-button>
      </unity-table-export>
    )
  }
}

