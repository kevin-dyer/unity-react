import React, { Component, CSSProperties } from 'react'
import '@bit/smartworks.unity.unity-core/unity-column-editor'
import { buttonPropsType } from "@bit/smartworks.unity-react.unity-button-react";

  export interface ColumnEditorProps {
    columns?: Object[],
    selectedColumns?: Object[],
    onUpdate?: Function,
    buttonProps?: buttonPropsType,
    modalOnly?: boolean,
    show?: boolean,
    onClose?: Function,
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
      buttonProps,
      onClose
    } : ColumnEditorProps = this.props

    const {
      columns: oldColumns,
      selectedColumns: oldSelectedColumns,
      onUpdate: oldOnUpdate,
      buttonProps: oldButtonProps,
      onClose: oldOnClose,
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

      if (oldOnClose !== onClose) {
        colEditor.onClose = onClose
      }
    }
  }

  render() {
    const {
      columns,
      selectedColumns,
      onUpdate,
      buttonProps,
      modalOnly,
      show,
      ...otherProps
    } = this.props
    let boolProps : ColumnEditorProps = {}

    if (modalOnly) {
      boolProps.modalOnly = true
    }
    if (show) {
      boolProps.show = true
    }
    return (
      <unity-column-editor
        ref={this.colEditorRef}
        {...boolProps}
        {...otherProps}
      ></unity-column-editor>
    )
  }
}
