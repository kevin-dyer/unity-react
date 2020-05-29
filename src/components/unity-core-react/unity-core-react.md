# unity-core

## Usage Example
- Using top level import:
```javascript
//import unity-typography react component and its declarations
import {UnityTypography, colorTypes, sizeTypes, headerStyleTypes} from '@bit/smartworks.unity.unity-core-react'
```
- Using path import to avoid loading unused modules
```javascript
import UnityTypography, {colorTypes, sizeTypes, headerStyleTypes} from '@bit/smartworks.unity.unity-core-react/UnityTypography'
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
