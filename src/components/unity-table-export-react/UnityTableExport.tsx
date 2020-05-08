import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-table-export'
import { ExportProps } from '@bit/smartworks.unity.unity-table-export'

export default class UnityTableExport extends Component<ExportProps> {

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
      beforeExport,
      onExport
    } : ExportProps = this.props

    const {
      tableRef: oldTableRef,
      beforeExport: oldBeforeExport,
      onExport: oldOnExport,
    } : ExportProps = oldProps

    const ref = this.exportRef.current
    if (!!ref) {
      if (oldTableRef !== tableRef) ref.tableRef = tableRef
      if (oldBeforeExport !== beforeExport) ref.beforeExport = beforeExport
      if (oldOnExport !== onExport) ref.onExport = onExport
    }
  }

  render() {
    const {
      children,
      tableRef,
      ...otherProps
    } = this.props

    return (
      <unity-table-export
        ref={this.exportRef}
        {...otherProps}
      >
        {children}
      </unity-table-export>
    )
  }
}

