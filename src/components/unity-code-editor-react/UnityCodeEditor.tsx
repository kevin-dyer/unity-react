import React from "react";
import AceEditor from "react-ace";
//NOTE: webpack-resolver prevents this component from being used in apps without webpack
// import "ace-builds/webpack-resolver.js"
import "ace-builds/src-noconflict/mode-json5";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-textmate";
import UnityTypography from "@bit/smartworks.unity-react.unity-typography-react";

import './UnityCodeEditor.css';

/**
 * A code editor for different languages, based on Ace editor.
 * @example
 * <CodeEditor mode="javascript" label="JSON editor"/>
 */

export type EditorType = "json" | "json5" | "javascript" | "python" | "sql" | "dockerfile" | "markdown" | "html";
export interface CodeEditorProps {
  mode: EditorType,
  value: string,
  onChange: Function,
  label?: string,
  dirty?: boolean,
  minLines?: number,
  maxLines?: number,
  error?: string,
  validation?: Function
}
export interface CodeEditorState {error: string}

class UnityCodeEditor extends React.Component<CodeEditorProps, CodeEditorState> {

  state = {
    error: ""
  };

  componentDidMount = () => {
    this.handleChange(this.props.value)
  }

  handleChange = (newValue: string) => {
    const {
      validation,
      onChange
    } = this.props
    let error = ''
    if (validation instanceof Function) {
      error = validation(newValue)
    }
    this.setState({error})
    onChange(newValue, error)
  }

  getValidationMessage(message: string)  {
    return (
      <div className="code-editor-paragraph invalid">
        <UnityTypography color="medium" style={{"--font-color-medium": "var(--internal-validation-color)"}} size="paragraph">
          {message}
        </UnityTypography>
      </div>
    )
  }

  // When the user changes a value in the code editor, it fires two updates:
  // the first is the state.error change
  // the second has props change
  // For whatever reason, the first update causes all folded code to unfold.
  // This stops that first update from going through. However, this also stops
  // any updates where the state.error changes and value doesn't. If we this
  // becomes a problem, we can revisit.
  shouldComponentUpdate(nextProps: CodeEditorProps, nextState: CodeEditorState) {
    const {
      value: nextValue
    } = nextProps
    const {
      error: nextError
    } = nextState
    const {
      value
    } = this.props
    const {
      error
    } = this.state

    if (nextError !== error && nextValue === value) return false

    return true
  }

  render() {
    const {
      value,
      mode,
      label,
      dirty,
      minLines=8,
      maxLines=16,
      error: errorText=''
    } = this.props
    const { error='' } = this.state
    const editorWrapperClass = (errorText || error)? "editor-wrapper invalid" : "editor-wrapper"
    return (
      <div className={editorWrapperClass}>
        <div className="code-editor-paragraph label">
          <UnityTypography color="medium" size="paragraph">
            {label}
          </UnityTypography>
        </div>

        <div className="editor-container">
          {!!dirty && <div className="dirty-gutter"/>}
          <AceEditor
            value={value}
            style={{width: "100%", height: "100%"}}
            theme={"textmate"}
            mode={mode === 'json' ? 'json5' : mode}
            editorProps={{ $blockScrolling: true }}
            onChange={this.handleChange}
            minLines={minLines}
            maxLines={maxLines}
          />
        </div>
        {(errorText || error) &&
          this.getValidationMessage(errorText || error)
        }
      </div>
    );
  }
}

export default UnityCodeEditor;
