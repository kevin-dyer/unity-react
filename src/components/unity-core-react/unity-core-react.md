# unity-core

## Usage Example
`//import unity-typography react component and it's declarations
import {UnityTypography, colorTypes, sizeTypes, headerStyleTypes} from '@bit/smartworks.unity.unity-core-react'`

## Adding a component
- add these two lines to unity-core-react/index.tsx:
`export {default as <Component>} from "@bit/smartworks.unity-react.<component-path>" //Export Component definition`
`export * from "@bit/smartworks.unity-react.<component-path>" //Export named exports such as typescript declarations`

## Changelog:

### v0.1.2
- expose all components and their declarations at the top level.
Ex. Import component and its types:
`import {<Component>, <Type1>, <Type2>, <PropsInterface>} from '@bit/smartworks.unity.unity-core-react'`

### v0.1.1
- Renamed files

### v0.1.0
- Mark as first release
- All unity components are included in this library component, located in the root folder. Import file path matches component name:
`import '@bit/smartworks.unity.unity-core/<component-name>.js'`
