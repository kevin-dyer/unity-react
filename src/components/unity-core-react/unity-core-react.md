# unity-core

## Usage Example
- Using top level import:
```javascript
//import unity-typography react component and its declarations
import {UnityTypography, colorTypes, sizeTypes, headerStyleTypes} from '@bit/smartworks.unity-react.unity-core-react'
```
- Using path import to avoid loading unused modules
```javascript
import UnityTypography, {colorTypes, sizeTypes, headerStyleTypes} from '@bit/smartworks.unity-react.unity-core-react/UnityTypography'
```

## Adding a component
1) Add these two lines to `unity-core-react/index.js`:
```javascript
export {default as <Component>} from "@bit/smartworks.unity-react.<component-path>" //Export Component definition
export * from "@bit/smartworks.unity-react.<component-path>" //Export named exports such as typescript declarations
```
2) Add a folder with the component name to `unity-core-react`, and put an `index.js` file there with these lines:
```javascript
export {default} from "@bit/smartworks.unity-react.<component-path>" //Export Component definition
export * from "@bit/smartworks.unity-react.<component-path>" //Export named exports such as typescript declarations
```

## Changelog:

### v2.4.6
- update unity-modal-ract v1.0.1

### v2.4.0
- Fixed UnitySelectMenu path export
- Added UnityPopover path export

### v2.3.0
- unity-text-input-react v1.2.0

### v2.2.1
- unity-global-nav-react v1.5.1

### v2.2.0
- unity-global-nav-react v1.5.0

### v2.1.3
- unity-dropdown-react v1.0.8

### v2.1.2
- unity-stepper-react v1.1.0

### v2.1.1
- unity-multi-pane-react v1.0.2

### v2.1.0
- unity-json-viewer-react v1.0.1
- unity-multi-pane-react v1.0.1

### v2.0.1
- unity-code-editor-react v2.0.1

### v2.0.0
- unity-code-editor-react v2.0.0

### v1.6.7
- unity-global-nav-react v1.4.1
- unity-global-nav-react v1.4.0

### v1.6.5
- unity-dropdown-react 1.0.7
- unity-select-menu-react 1.1.5

### v1.6.4
- unity-global-nav-react v1.3.0

### v1.6.3
- unity-table-react v1.1.2

### v1.6.2
- unity-table-react v1.1.1

### v1.6.1
- unity-code-editor-react v1.2.1

### v1.6.0
- unity-code-editor-react v1.2.0

### v1.5.1
- unity-code-editor-react v1.1.1

### v1.5.0
- unity-code-editor-react v1.1.0
- unity-dropdown-react v1.0.6

### v1.4.1
- unity-code-editor-react v1.0.1
### v1.4.0
- unity-text-input v1.1.0

### v1.3.34
- unity-select-menu-react v1.1.4

### v1.3.33
- unity-dropdown-react v1.0.4

### v1.3.29
- documentation correction

### v1.3.28
- unity-checkbox-react v1.1.1

### v1.3.27
- unity-select-menu v1.1.0

### v1.3.26
- added unity-select-menu-react
- unity-select-menu-react v0.1.0
- unity-select-menu-react v0.1.1

### v1.3.23
- unity-dropdown-react v1.0.4

### v1.3.22
- unity-table-react v1.1.0

### v1.3.21
- unity-stepper-react v1.0.0

### v1.3.19
- Updated @bit dependencies

### v1.3.18
- unity-global-nav-react v1.2.0

### v1.3.17
- unity-global-nav-react 1.1.0

### v1.3.16
- unity-checkbox-react v1.0.0

### v1.3.15
- unity-split-pane-react v1.0.3

### v1.3.14
- unity-split-pane-react v1.0.2

### v1.3.12
- unity-notifications-handler-react v1.1.2
- unity-table-react v1.0.2

### v1.3.8
- unity-notification-react 1.0.3
- unity-notifications-handler-react 1.1.1

### v1.3.3
- unity-text-input-react v1.0.2

### v1.3.2
- unity-text-input-react v1.0.1

### v1.3.1
Updates to support unity-core v1.7.10:
- unity-button-react v1.1.3
- unity-dropdown-react v1.0.3
- unity-notification-react v1.0.2
- unity-tag-react v1.0.4
- unity-text-input-react v1.0.0 -> NOT WORKING


### v1.3.0
- add unity-search-bar-react v1.0.0

### v1.2.9
Updated to support unity-core v1.6.15:
- unity-popover-react v1.0.3

### v1.2.8
Updated to support unity-core v1.6.14:
- unity-button-react v1.1.2
- unity-dropdown-react v1.0.2

### v1.2.7
- unity-popover-react v1.0.2
- unity-notifications-handler-react v.1.1.0

### v1.2.6
- unity-notifications-handler-react v1.0.4 (fixes app crash when using component)

### v1.2.5
- unity-button-react v1.1.1
- unity-dropdown-react v1.0.1

### v1.2.4
- unity-popover-react v1.0.1

### v1.2.3
- unity-tag-react v1.0.3
- unity-notifications-handler v1.0.3
- unity-popover-react v1.0.0

### v1.2.2
- unity-popover-react v0.0.1
- unity-tag-react v1.0.2

### v1.2.1
- unity-tag-react v1.0.1
- unity-notifications-handler-react v1.0.2

### v1.2.0
- unity-tag-react v1.0.0

### v1.1.3
- unity-modal-react v1.0.0

### v1.1.2
- unity-notifications-handler-react v1.0.1

### v1.1.1
- unity-page-header-react v1.1.0
- unity-column-editor-react v1.0.1

### v1.1.0
- Updated props, types, and added generic HTML attributes multiple components:
  - unity-button-react v1.1.0
  - unity-column-editor-react v1.0.0
  - unity-global-nav-react v1.0.0
  - unity-notifications-handler-react v1.0.0
  - unity-split-pane-react v1.0.0
  - unity-table-react v1.0.0

### v1.0.5
- unity-page-header-react v1.0.1

### v1.0.2
- unity-page-header-react v1.0.0

### v1.0.1
- unity-typography-react v1.0.1

### v1.0.0
- Update unity-typography-react v1.0.0, unity-code-editor-react v1.0.0, unity-json-viewer-react v1.0.0
- Update to v1 to enable proper semantic versioning

### v0.5.3
- Update unity-core v1.3.6, unity-button-react v1.0.0, unity-dropdown-react v1.0.0

### v0.5.2
- Fix uncaught unity-global-nav-react downgrade

### v0.5.1
- Update unity-core v1.3.2

### v0.5.0
- Update unity-global-nav-react v0.3.0

### v0.4.35
- Update unity-core v1.2.15, update UnityTable to handle new props

### v0.4.34
- Update unity-core v1.2.10

### v0.4.18
- unity-dropdown-react v0.3.1

## v0.4.16
- unity-notifications-handler-react 0.2.1

## v0.4.8
- unity-notifications-handler-react 0.1.3

## v0.4.7
- unity-modal 1.0.3

## v0.4.6
- unity-notifications-handler-react 0.1.2

## v0.4.5
- unity-notifications-handler-react 0.1.1

## v0.4.4
- export bug fix for unity-notifications-handler-react

## v0.4.3
- unity-notifications-handler-react 0.1.0
- unity-notification-react 1.0.0

### v0.4.2
- unity-section-react 0.3.3

### v0.4.1
- unity-section-react 0.3.2
- unity-notification-react 0.2.2

### v0.4.0
- unity-dropdown-react 0.3.0 (depends on unity-core 1.1.0)

### v0.3.1
- unity-code-editor-react v0.2.2

### v0.3.0
- Added path imports

### v0.2.0
- Updated @bit dependencies

### v0.1.2
- Expose all components and their declarations at the top level.
Ex. Import component and its types:
`import {<Component>, <Type1>, <Type2>, <PropsInterface>} from '@bit/smartworks.unity.unity-core-react'`

### v0.1.1
- Renamed files

### v0.1.0
- Mark as first release
- All unity components are included in this library component, located in the root folder. Import file path matches component name:
`import '@bit/smartworks.unity.unity-core/<component-name>.js'`
