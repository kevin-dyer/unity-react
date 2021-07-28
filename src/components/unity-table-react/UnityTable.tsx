import React, { Component, CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react'
import '@bit/smartworks.unity.unity-core/unity-table'

export interface TablePropsI extends HTMLAttributes<HTMLElement> {
  data?: Object[]
  columns?: TableColumnI[]
  selected?: string[]
  childKeys?: string[]
  keyExtractor?: Function
  slotIdExtractor?: Function
  onClickRow?: Function
  onSelectionChange?: Function
  onDisplayColumnsChange?: Function
  onColumnChange?: Function
  onExpandedChange?: Function
  selectable?: boolean
  filter?: String
  emptyText?: string
  isLoading?: boolean
  onEndReached?: Function
  onHighlight?: Function
  children?: Object[]
  highlightedRow?: string
  endReachedThreshold?: number
  compact?: boolean
  headless?: boolean
  startExpanded?: boolean
  columnFilters?: ColumnFiltersI,
  rightActionsContent?: ReactElement | HTMLElement
  disableColumnResize?: boolean
  initialSortBy?: SortByI
  onColumnSort?: Function
  onColumnFilter?: Function
  style?: TableStyles
}

export type TableStyles = CSSProperties & {
  '--paper-checkbox-size'?: string 
  '--paper-checkbox-unchecked-background-color'?: string 
  '--paper-checkbox-unchecked-color'?: string 
  '--paper-checkbox-checked-color'?: string 
  '--paper-checkbox-unchecked-ink-color'?: string 
  '--paper-checkbox-checked-ink-color'?: string 
  '--paper-spinner-color'?: string 
  '--thead-height'?: string 
  '--thead-compact-height'?: string 
  '--trow-height'?: string 
  '--trow-compact-height'?: string 
  '--hover-color'?: string 
  '--highlight-color'?: string 
  '--hover-highlight-color'?: string 
  '--paper-checkbox-ink-size'?: string 
  '--paper-icon-button-ink-color'?: string 
  '--padding-small'?: string 
  '--padding-medium'?: string 
  '--padding-large'?: string 
  '--padding-extra-large'?: string 
  '--margin-medium'?: string 
  '--header-text-color'?: string 
  '--separator-color'?: string 
  '--filter-button-color'?: string 
  '--sort-button-color'?: string 
}

export interface TableColumnI {
  key?: string,
  label?: string,
  inputType?: string,
  centered?: boolean,
  width?: number,
  formatLabel?: (value: any) => string,
  customFilter?: (filter?: string, value?: any) => boolean
  renderCustomContent?: (value?: any, node?: Object) => ReactNode,
  showFilter?: boolean,
  hideSort?: boolean
}

export type expressionType = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte'

export interface ColumnFiltersI {
  expression: expressionType,
  value: string | number
}

const slotStyles : CSSProperties = {
  flex: 1,
  minHeight: 'var(--trow-height)',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%'
}

export type sortDirectionType = 'Ascending' | 'Descending' | 'Unsorted'

export interface SortByI {
  column: string,
  direction: sortDirectionType
}

export default class UnityTable extends Component<TablePropsI> {

  public tableRef = React.createRef<TablePropsI>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: TablePropsI) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps: TablePropsI = {}) {
    const {
      data,
      columns,
      selected,
      childKeys,
      keyExtractor,
      slotIdExtractor,
      onClickRow,
      onSelectionChange,
      onDisplayColumnsChange,
      onColumnChange,
      onEndReached,
      onHighlight,
      onExpandedChange,
      columnFilters,
      onColumnSort,
      onColumnFilter
    } = this.props
    const {
      data: oldData,
      columns: oldColumns,
      selected: oldSelected,
      childKeys: oldChildKeys,
      keyExtractor: oldKeyExtractor,
      slotIdExtractor: oldSlotIdExtractor,
      onClickRow: oldOnClickRow,
      onSelectionChange: oldOnSelectionChange,
      onDisplayColumnsChange: oldOnDisplayColumnsChange,
      onColumnChange: oldOnColumnChange,
      onEndReached: oldOnEndReached,
      onHighlight: oldOnHighlight,
      onExpandedChange: oldOnExpandedChange,
      columnFilters: oldColumnFilters,
      onColumnSort: oldOnColumnSort,
      onColumnFilter: oldOnColumnFilter
    } : TablePropsI = oldProps

    const unityTable = this.tableRef.current
    if(unityTable) {
      if (oldChildKeys !== childKeys) {
        unityTable.childKeys = childKeys
      }
      if (oldColumns !== columns) {
        unityTable.columns = columns
      }
      if (oldSelected !== selected) {
        unityTable.selected = selected
      }
      if (oldData !== data) {
        unityTable.data = data
      }
      if (oldKeyExtractor !== keyExtractor) {
        unityTable.keyExtractor = keyExtractor
      }
      if (oldSlotIdExtractor !== slotIdExtractor) {
        unityTable.slotIdExtractor = slotIdExtractor
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
      if (oldSlotIdExtractor !== slotIdExtractor) {
        unityTable.slotIdExtractor = slotIdExtractor
      }
      if (oldOnExpandedChange !== onExpandedChange) {
        unityTable.onExpandedChange = onExpandedChange
      }
      if (oldColumnFilters !== columnFilters) {
        unityTable.columnFilters = columnFilters
      }

      if (oldOnColumnSort !== onColumnSort) {
        unityTable.onColumnSort = onColumnSort
      }

      if (oldOnColumnFilter !== onColumnFilter) {
        unityTable.onColumnFilter = onColumnFilter
      }
    }
  }

  _slotIdExtractor = (row: any, column: any) => {
    const {keyExtractor=()=>{}} = this.props
    const rowId = keyExtractor(row)

    return `${rowId}-${column.key}`
  }

  renderCustomContent = () => {
    const {
      data=[],
      columns=[],
      childKeys=[],
    }: TablePropsI = this.props

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
        const { key='', renderCustomContent=()=>(<></>) }: TableColumnI = column
        const cellValue: string = node[key]
        const customContent: any = renderCustomContent(cellValue, node)
        const slotId: string = this._slotIdExtractor(node, column)

        if (!!customContent) {
          slots.push(<div slot={slotId} key={slotId} style={slotStyles}>{customContent}</div>)
        }
      })
    })

    return slots
  }

  renderRightActionsContent = () => {
    const {rightActionsContent} = this.props

    if (!!rightActionsContent) {
      return <div slot="right-actions">{rightActionsContent}</div>
    }
  }

  render() {
    const {
      selectable=false,
      filter='',
      emptyText,
      isLoading=false,
      children,
      highlightedRow='',
      endReachedThreshold=200,
      compact,
      headless,
      startExpanded,
      disableColumnResize,
      style,
      // function and complex objects, destructured so that they are not added as props
      data,
      columns,
      selected,
      childKeys,
      keyExtractor,
      slotIdExtractor,
      onClickRow,
      onSelectionChange,
      onDisplayColumnsChange,
      onColumnChange,
      onEndReached,
      onHighlight,
      onExpandedChange,
      columnFilters,
      rightActionsContent,
      onColumnSort,
      onColumnFilter,
      ...otherProps
    } = this.props
    let booleanProps : TablePropsI = {}

    //Not isLoading attribute must not be passed in if false
    if (isLoading) {
      booleanProps.isLoading = isLoading
    }
    if (selectable) {
      booleanProps.selectable = selectable
    }
    if (compact) {
      booleanProps.compact = compact
    }
    if (headless) {
      booleanProps.headless = headless
    }
    if (startExpanded) {
      booleanProps.startExpanded = startExpanded
    }
    if (disableColumnResize) {
      booleanProps.disableColumnResize = disableColumnResize
    }
    return ( 
      <unity-table
        ref={this.tableRef}
        filter={filter}
        emptyDisplay={emptyText}
        highlightedRow={highlightedRow}
        endReachedThreshold={endReachedThreshold}
        style={style}
        {...booleanProps}
        {...otherProps}
      >
        {this.renderCustomContent()}
        {this.renderRightActionsContent()}
        {children}
      </unity-table>
    )
  }
}