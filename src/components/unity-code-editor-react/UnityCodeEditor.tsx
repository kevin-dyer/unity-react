import React from "react";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver.js"

import "ace-builds/src-noconflict/mode-json5";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-textmate";

import './UnityCodeEditor.css';

/**
 * A code editor for different languages, based on Ace editor.
 * @example
 * <CodeEditor mode="javascript" label="JSON editor"/>
 */

export type EditorType = "json" | "json5" | "javascript" | "python" | "sql" | "dockerfile" | "markdown" | "html";
export interface CodeEditorProps {
  mode: EditorType,
  label?: string,
  onChange: Function,
  value: string,
  dirty?: boolean,
  minLines?: number,
  maxLines?: number,
  showError?: boolean,
  errorText?: string
}
export interface CodeEditorState {error: string}

class UnityCodeEditor extends React.Component<CodeEditorProps, CodeEditorState> {

  state = {
    error: ""
  };

  componentDidMount = () => {
    this.handleChange(this.props.value)
  }

  handleChange = (newValue: string, e?: Event) => {
    let error = ''
    if (this.props.mode === "json") {
      error = this.validateJson(newValue)
    }
    this.props.onChange(e, newValue, error)
  }

  validateJson(value: string) {
    try {
      if(value) {
        JSON.parse(value);
      }
      this.setState({error: ""});
    } catch (e) {
      this.setState({error: e.toString()});
      return e.toString()
    }
  }

  getValidationMessage()  {
    const { errorText='' } = this.props
    const { error='' } = this.state
    if (this.state.error) {
      return (
        <p className="code-editor-paragraph invalid">
          {errorText || error}
        </p>
      )
    }
  }

  render() {
    const {
      value,
      mode,
      label,
      dirty,
      minLines=8,
      maxLines=16,
      showError
    } = this.props
    return (
      <div className="editor-wrapper">
        <p className="code-editor-paragraph label">{label}</p>

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
          {showError && this.getValidationMessage()}
        </div>
      </div>
    );
  }
}

export default UnityCodeEditor;
