# unity-table-react

## Changelog:

### v1.1.0
- Added `disableColumnResize` and `hideFilterIcons` props
- Added `inputType` and `centered` properties to tableColumn type
- Pass global HTML attributes into wrapped component

### v1.0.3
- Prevent horizontal overflow of custom table cell content by setting max-width of slot to 100%.

### v1.0.2
- Pass style prop into web component. Generic HTML attributes are not being passed and must be fixed.
- Updated style types.

### v1.0.1
- added prop rightActionsContent to insert react content into the right-actions table slot.

### v1.0.0
- Added generic HTML attributes
- Added `slotIdExtractor`, `onExpandedChange`, `headless`, `startExpanded` and `columnFilter` props
- Updated prop and CSS types
- Removed wrapper div
- Updated to v1 to enable proper semantic versioning

### v0.5.0
- Update to unity-core v1.2.15, add compact option, remove header border option

### v0.4.5
- Update unity-core v1.2.10

### v0.4.1
- Updated @types dependency

### v0.4.0
- Moved all @bit depedencies to peerDependencies

### v0.3.11
- updated to unity-table 0.4.20 (fixes column filter issues on Edge)

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
