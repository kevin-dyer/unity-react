import * as CSS from 'csstype'

declare module React.CSSProperties {
  export interface customStyles extends CSS.Properties {
    [index: string]: any
  }
}
