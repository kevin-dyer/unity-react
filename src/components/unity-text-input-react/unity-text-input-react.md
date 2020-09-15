# unity-text-input-react

## Changelog:

### v1.0.2
- Added missing `dirty`, `readOnly` and `required` props
- Fix `error` type, and only pass it to component when it is not false. Otherwise, `false` values will be stringified and showed as errors
- Set `onChange` and `validation` functions both after mount and update

### v1.0.1
- Fix bug where properties were not being properly passed to wrapped component

### v1.0.0 - NOT WORKING
- Update to v1 to make use of semantic versioning
- Added types exports
- Properly establish what should be pass into the wrapped component as attributes (strings and booleans when true)

### v0.2.2
- Update unity-core v1.2.10

### v0.2.1
- Updated @types dependency

### v0.2.0
- Moved all @bit depedencies to peerDependencies

### v0.1.2
- Update to unity-text-input v0.1.32

### v0.1.0
- Update to WC component for validation and a few minor bugs. Marking as 0.1.0 to show its valid working state.

### v0.0.4 (03/18/2020)
- Fixed empty string showing as "null" when specified through `value` property.

### v0.0.3
- Moved types to declaration file
- Simplified the way to pass props to unity-text-input
- Updated unity-text-input to v0.1.30
