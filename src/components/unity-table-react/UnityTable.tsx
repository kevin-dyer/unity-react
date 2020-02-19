import React, { Component, CSSProperties } from 'react'
import '@bit/smartworks.unity.unity-table'

interface TableProps {
  data?: Object[],
  columns?: Object[],
  childKeys?: string[],
  keyExtractor?: Function,
  onClickRow?: Function,
  onSelectionChange?: Function,
  onDisplayColumnsChange?: Function,
  onColumnChange?: Function,
  selectable?: boolean,
  filter?: Object[],
  emptyText?: string,
  isLoading?: boolean,
}

interface TableStyles {
  container: CSSProperties
}

export default class UnityTable extends Component<TableProps> {

  private tableRef = React.createRef<TableProps>()


  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: TableProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps={}) {
    const {
      data,
      columns,
      childKeys,
      keyExtractor,
      onClickRow,
      onSelectionChange,
      onDisplayColumnsChange,
      onColumnChange
    } = this.props
    const {
      data: oldData,
      columns: oldColumns,
      childKeys: oldChildKeys,
      keyExtractor: oldKeyExtractor,
      onClickRow: oldOnClickRow,
      onSelectionChange: oldOnSelectionChange,
      onDisplayColumnsChange: oldOnDisplayColumnsChange,
      onColumnChange: oldOnColumnChange
    } : TableProps = oldProps

    const unityTable = this.tableRef.current
    if (unityTable) {
      if (oldChildKeys !== childKeys) {
        unityTable.childKeys = childKeys
      }
      if (oldColumns !== columns) {
        unityTable.columns = columns
      }
      if (oldData !== data) {
        unityTable.data = data
      }
      if (oldKeyExtractor !== keyExtractor) {
        unityTable.keyExtractor = keyExtractor
      }
      if (oldOnClickRow !== onClickRow) {
        unityTable.keyExtractor = keyExtractor
      }
      if (oldOnSelectionChange !== onSelectionChange) {
        unityTable.onSelectionChange = onSelectionChange
      }
      //NOTE: the two callbacks for column change should be combined
      if (oldOnDisplayColumnsChange !== onDisplayColumnsChange) {
        unityTable.onDisplayColumnsChange = onDisplayColumnsChange
      }
      if (oldOnColumnChange !== onColumnChange) {
        unityTable.onColumnChange = onColumnChange
      }
    }
  }

  render() {
    const {
      selectable=false,
      filter='',
      emptyText,
      isLoading=false,
    } = this.props
    let isLoadingProps = {}

    //Not isLoading attribute must not be passed in if false
    if (isLoading) {
      isLoadingProps = {isLoading}
    }

    console.log("render data: ", this.props.data, ", columns: ", this.props.columns)

    return <div style={styles.container}>
        <unity-table
          ref={this.tableRef}
          selectable={selectable}
          filter={filter}
          emptyDisplay={emptyText}
          // isLoading={isLoading}
          {...isLoadingProps}
        />
    </div>
  }
}

const styles : TableStyles = {
  container: {
    flex: 1,
    position: 'relative',
    overflowY: 'auto'
  }
}
