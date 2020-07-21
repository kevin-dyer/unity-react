import React, { Component, CSSProperties } from 'react'
import '@bit/smartworks.unity.unity-core/unity-column-editor'
import { buttonPropsType } from "@bit/smartworks.unity-react.unity-button-react";

  export interface ColumnEditorProps {
    columns?: Object[],
    selectedColumns?: Object[],
    onUpdate?: Function,
    buttonProps?: buttonPropsType
    style?: ColumnEditorStyles
  }

  export type ColumnEditorStyles =  CSSProperties & {
    '--paper-checkbox-size'?: string
    '--paper-checkbox-unchecked-color'?: string
    '--paper-checkbox-checked-color'?: string
    '--paper-checkbox-unchecked-ink-color'?: string
    '--paper-checkbox-checked-ink-color'?: string
  }

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
    const { columns, selectedColumns, onUpdate, buttonProps, ...otherProps } = this.props
    return (
      <unity-column-editor
        ref={this.colEditorRef}
        {...otherProps}
      ></unity-column-editor>
    )
  }
}
