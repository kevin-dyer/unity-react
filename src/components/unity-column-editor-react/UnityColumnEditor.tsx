import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-core/unity-column-editor'
import {ColumnEditorProps, ColumnEditorStyles} from '@bit/smartworks.unity.unity-core/unity-column-editor'

export default class UnityColumnEditor extends Component<ColumnEditorProps> {

  private colEditorRef = React.createRef<ColumnEditorProps>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: ColumnEditorProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps={}) {
    const {
      columns,
      selectedColumns,
      onUpdate,
      buttonProps
    } : ColumnEditorProps = this.props

    const {
      columns: oldColumns,
      selectedColumns: oldSelectedColumns,
      onUpdate: oldOnUpdate,
      buttonProps: oldButtonProps
    } : ColumnEditorProps = oldProps

    const colEditor = this.colEditorRef.current
    if (colEditor) {
      if (oldColumns !== columns) {
        colEditor.columns = columns
      }
      if (oldSelectedColumns !== selectedColumns) {
        colEditor.selectedColumns = selectedColumns
      }

      if (oldOnUpdate !== onUpdate) {
        colEditor.onUpdate = onUpdate
      }

      if (oldButtonProps !== buttonProps) {
        colEditor.buttonProps = buttonProps
      }
    }
  }

  render() {
    return (
      <unity-column-editor
        ref={this.colEditorRef}
      ></unity-column-editor>
    )
  }
}
