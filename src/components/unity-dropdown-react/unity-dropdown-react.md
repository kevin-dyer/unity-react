# unity-dropdown-react

## Changelog:

### v1.1.0
- Added `autofocus` prop
- Pass `rightAlign`, `searchBox`, `selectIcon` and `showTags` boolean properties to wrapped component only when they are true

### v1.0.2
- Pass array props to wrapped web component as properties instead of attributes
- Removed margin and padding from bottom slot div
- Added `--dropdown-search-input-padding` to style types

### v1.0.1
- Updated to unity-core v1.6.10
- Added `--dropdown-width` and `--dropdown-border-radius` to style types
- Removed number type from custom CSS variables types, since number values from custom variables are not converted to pixels
- Added bottomContent prop

### v1.0.0
- Update unity-core v1.3.6

### v0.3.2
- Update unity-core v1.2.10

### v0.3.1
- fix disabled to function as intended

### v0.3.0
- Added rightAlign to prop types
- Added css types

### v0.2.1
- Updated @types dependency

### v0.2.0
- Moved all @bit depedencies to peerDependencies

### v0.1.9
- Updated unity-dropdown to v0.1.27 (fixes some Edge issues)

### v0.1.1
- Fix function update handler to properly pass onValueChange down, fix hosted version number

### v0.1.0
- Initial wrapper for component
