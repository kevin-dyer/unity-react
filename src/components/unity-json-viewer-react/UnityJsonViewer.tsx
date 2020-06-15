import React from "react";
import UnityCodeEditor, {CodeEditorStylesI} from '@bit/smartworks.unity-react.unity-code-editor-react'
import './UnityJsonViewer.css'

/**
 * A readOnly collapsible json tree viewer based on UnityCodeEditor
 * @example
 * <UnityJsonViewer src={json_string_or_object}/>
 */

export interface JsonViewerProps {
  src?: string,
  style?: CodeEditorStylesI
}

export default class UnityJsonViewer extends React.Component<JsonViewerProps> {
  render() {
    const {src='', style={}} = this.props
    let formattedStr
    try {
      formattedStr = JSON.stringify(JSON.parse(src), null, 2)
    } catch (e) {
      formattedStr = src
    }

    return (<div
      onClick={e => {
        e.preventDefault();
        e.stopPropagation()
      }}
      style={{...styles.readOnlyJSON, ...style}}
      className="read-only-json"
    >
      <div style={styles.editorWrapper}>
        <UnityCodeEditor
          value={formattedStr}
          key={`json-readonly`}
          label={""}
          mode={'json5'}
          readOnly={true}
          onChange={()=>{}}
          error=""
          highlightActiveLine={false}
          showLineNumbers={false}
          minLines={1}
          maxLines={30}
        />
      </div>
    </div>)
  }
}

const styles = {
  readOnlyJSON: {
    "--active-color": "rgba(0,0,0,0)",
    "--gutter-color": "#FFF",
    "--border-color": "rgba(0,0,0,0)",
    "--fold-color": "#FFF",
    display: "relative",
    overflow: "hidden"
  },
  editorWrapper: {
    marginLeft: -22,
    width: 'auto'
  }
}