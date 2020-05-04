# unity-table-react

## Changelog:

### v0.3.10
- added selected attribute

### v0.3.1
- remove leftover log

### v0.3.0
- update to unity-table v0.4.2
- add noTopBorder control

### v0.2.10
- update to unity-table v0.3.23

### v0.2.9
- update to unity-table v0.3.22

### v0.2.3
- update to dropdown dependency via text-input

### v0.2.2
- Added highlightedRow and endReachedThreshold properties

### v0.2.0
- Added support for custom table cell content. To insert custom content, define renderCustomContent, which returns JSX, in the columns prop:
  <UnityTable columns=[{
    formatLabel: (cellValue, node) => cellValue //if defined, overwriten by renderCustomContent
    renderCustomContent: (cellValue, node) => <div>{cellValue} degrees Celsius</div>
  }]/>
The return of renderCustomContent will overwrite the cellValue or what is returned from formatLabel.
Note that custom data can still be passed in by defining slots as children of UnityTable:
<UnityTable>
  <slot slot={slotId1} key={slotId1}>{CustomContent}</slot>
</UnityTable>
Slot names must be defined as `${rowId}-${column.key}`. Determine rowId from the keyExtractor

### v0.1.0
- Changed name of column filter function to filterLabel for clarity. If filterLabel is undefined, the raw 'data' value will be displayed. This function is only used to format table cell string labels and the text to search/filter by.

- custom content can be inserted into table cells via the column renderCustomContent function. Content returned from this column function will be rendered inside a named slot inside unity-table children. Users can also choose insert their own slots as children of UnityTable instead of relying on the renderCustomContent column function.

### v0.0.6
- Fixed `selectable` property being always passed

### v0.0.3
- Added onClickRow, onEndReached and onHighlight props
- Moved types to declaration file
