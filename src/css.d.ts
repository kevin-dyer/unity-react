import * as CSS from 'csstype'

declare module React.CSSProperties {
  interface customStyles extends React.CSSProperties {
    [index: string]: any
  }
}
