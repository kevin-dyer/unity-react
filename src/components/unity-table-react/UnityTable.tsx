import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-table'
import {TableProps, TableStyles} from '@bit/smartworks.unity.unity-table'

export default class UnityTable extends Component<TableProps> {

  private tableRef = React.createRef<TableProps>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: TableProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: TableProps = {}) {
    const {
      data,
      columns,
      childKeys,
      keyExtractor,
      onClickRow,
      onSelectionChange,
      onDisplayColumnsChange,
      onColumnChange,
      onEndReached,
      onHighlight
    } = this.props
    const {
      data: oldData,
      columns: oldColumns,
      childKeys: oldChildKeys,
      keyExtractor: oldKeyExtractor,
      onClickRow: oldOnClickRow,
      onSelectionChange: oldOnSelectionChange,
      onDisplayColumnsChange: oldOnDisplayColumnsChange,
      onColumnChange: oldOnColumnChange,
      onEndReached: oldOnEndReached,
      onHighlight: oldOnHighlight
    } : TableProps = oldProps

    const unityTable = this.tableRef.current
    if(unityTable) {
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
        unityTable.onClickRow = onClickRow
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
      if (oldOnEndReached !== onEndReached) {
        unityTable.onEndReached = onEndReached
      }
      if (oldOnHighlight !== onHighlight) {
        unityTable.onHighlight = onHighlight
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
