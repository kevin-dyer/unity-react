import React, { Component, CSSProperties } from 'react'
import '@bit/smartworks.unity.unity-column-editor'

interface ColumnEditorProps {
  columns?: Object[],
  selectedColumns?: Object[],
  onUpdate?: Function,
  buttonGradient?: boolean,
  buttonOutlined?: boolean,
}

interface ColumnEditorStyles {
  container: CSSProperties
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
      onUpdate
    } : ColumnEditorProps = this.props

    const {
      columns: oldColumns,
      selectedColumns: oldSelectedColumns,
      onUpdate: oldOnUpdate
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
    }
  }

  render() {
    const {
      buttonGradient,
      buttonOutlined
    } = this.props
    let editorProps : ColumnEditorProps = {}

    if (buttonGradient) {
      editorProps.buttonGradient = buttonGradient
    }

    if (buttonOutlined) {
      editorProps.buttonOutlined = buttonOutlined
    }

    if (!buttonGradient && !buttonOutlined) {
      editorProps.buttonGradient = true
    }

    return <div style={styles.container}>
        <unity-column-editor
          ref={this.colEditorRef}
          {...editorProps}
        ></unity-column-editor>
    </div>
  }
}

const styles : ColumnEditorStyles = {
  container: {
    flex: 1,
    position: 'relative'
  }
}
