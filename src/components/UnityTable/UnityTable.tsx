import React, { Component, CSSProperties } from 'react'
import '@bit/smartworks.unity.unity-table'

interface TableProps {
  data?: Object[],
  columns?: IColumn[],
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
  children?: Object[]
}

interface TableStyles {
  container: CSSProperties
}

interface IColumn {
  renderCustomContent?: Function,
  key?: string
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

  _slotIdExtractor = (row: any, column: any) => {
    const {keyExtractor=(node: any, index: number)=>{}} = this.props
    const rowId = keyExtractor(row)

    return `${rowId}-${column.key}`
  }

  renderCustomContent = () => {
    const {
      data=[],
      columns=[],
      childKeys=[],
    }: TableProps = this.props

    let slots: any[] = []
    let nodes: object[] = [...data]

    //Filter columns with a renderCustomContent function.
    const colsWithContent = columns.filter(({renderCustomContent}={}) =>
      renderCustomContent instanceof Function
    )

    //callback fired on each node in this.props.data, flattens nodes into 1D array
    const accumulateNodes = (node: any) => (childKey: string='') => {
      const children = node[childKey]
      if (Array.isArray(children)) {
        nodes = [...nodes, ...children]
      }

      return nodes
    }

    for(let i = 0; i < nodes.length; i++) {
      const node: any = nodes[i]
      childKeys.forEach(accumulateNodes(node))
    }

    //Loop over nodes, and for each, loop over cols with content
    //Extract cell content and append to slots array
    nodes.forEach((node: any={}) => {
      colsWithContent.forEach((column={}) => {
        const {key='', renderCustomContent=()=>{}}: IColumn = column
        const cellValue: string = node[key]
        const customContent: any = renderCustomContent(cellValue, node)
        const slotId: string = this._slotIdExtractor(node, column)

        if (!!customContent) {
          slots.push(<div slot={slotId} key={slotId}>{customContent}</div>)
        }
      })
    })

    return slots
  }

  render() {
    const {
      selectable=false,
      filter='',
      emptyText,
      isLoading=false,
      children
    } = this.props
    let isLoadingProps = {}

    //Not isLoading attribute must not be passed in if false
    if (isLoading) {
      isLoadingProps = {isLoading}
    }

    return <div style={styles.container}>
        <unity-table
          ref={this.tableRef}
          selectable={selectable}
          filter={filter}
          emptyDisplay={emptyText}
          {...isLoadingProps}
        >
          {this.renderCustomContent()}
          {children}
        </unity-table>
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
