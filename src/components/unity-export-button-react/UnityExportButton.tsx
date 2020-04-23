import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-table-export'
import { ExportButtonProps, ExportButtonStyles } from '@bit/smartworks.unity.unity-table-export'

export default class UnityExportButton extends Component<ExportButtonProps> {

  // componentDidMount = () => {
  //   this.updateProperties()
  // }

  // componentDidUpdate(oldProps: ExportButtonProps) {
  //   this.updateProperties(oldProps)
  // }

  // updateProperties(oldProps={}) {
  //   const {
  //     tableRef,
  //     onExport
  //   } : ExportButtonProps = this.props
  //
  //   const {
  //     columns: oldColumns,
  //     selectedColumns: oldSelectedColumns,
  //     onUpdate: oldOnUpdate
  //   } : ExportButtonProps = oldProps
  //
  //   const colEditor = this.colEditorRef.current
  //   if (colEditor) {
  //     if (oldColumns !== columns) {
  //       colEditor.columns = columns
  //     }
  //     if (oldSelectedColumns !== selectedColumns) {
  //       colEditor.selectedColumns = selectedColumns
  //     }
  //
  //     if (oldOnUpdate !== onUpdate) {
  //       colEditor.onUpdate = onUpdate
  //     }
  //   }
  // }

  render() {
    const {
      // tableExportProps
      tableRef,
      onExport,
      // button props
      label,
      leftIcon,
      rightIcon,
      centerIcon,
      type,
      danger,
      loading,
      small
    } = this.props

    console.log('tableRef', tableRef)

    const tableExportProps : ExportButtonProps = {}
    if (!!tableRef) tableExportProps.tableRef = tableRef
    if (!!onExport) tableExportProps.onExport = onExport

    const buttonProps : ExportButtonProps = {}
    if (!!label) buttonProps.label = label
    if (!!leftIcon) buttonProps.leftIcon = leftIcon
    if (!!rightIcon) buttonProps.rightIcon = rightIcon
    if (!!centerIcon) buttonProps.centerIcon = centerIcon
    if (!!type) buttonProps.type = type
    if (!!danger) buttonProps.danger = danger
    if (!!loading) buttonProps.loading = loading
    if (!!small) buttonProps.small = small

    return <div style={styles.container}>
        <unity-table-export
          {...tableExportProps}
        >
          <unity-button
            {...buttonProps}
          ></unity-button>
        </unity-table-export>
    </div>
  }
}

const styles : ExportButtonStyles = {
  container: {
    flex: 1,
    position: 'relative'
  }
}
