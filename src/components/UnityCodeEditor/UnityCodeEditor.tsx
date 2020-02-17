import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-html";

import './UnityCodeEditor.css';

/**
 * A code editor for different languages, based on Ace editor. 
 * @example
 * <CodeEditor mode="javascript" label="JSON editor"/>
 */

export type EditorType = "json" | "javascript" | "python" | "sql" | "dockerfile" | "markdown" | "html";
export interface CodeEditorProps {mode: EditorType; label: string}
export interface CodeEditorState {value: string, error: string}

class UnityCodeEditor extends React.Component<CodeEditorProps, CodeEditorState> {

  state = {
    value: "",
    error: ""
  };


  onChange = (newValue: string) => {
    this.setState({value: newValue});  
    if (this.props.mode === "json") {
      this.validateJson(newValue)
    }
  }

  validateJson(value: string) {
    try {
      if(value) {
        JSON.parse(value);
      }
      this.setState({error: ""});
    } catch (e) {
      this.setState({error: e.toString()});
    }
  }

  getValidationMessage()  {
    if (this.state.error) {
      return (
        <p className="code-editor-paragraph invalid">
          {this.state.error}
        </p>
      )
    }
  }

  render() {
    return (
      <div className="editor-wrapper">
        <p className="code-editor-paragraph label">{this.props.label}</p>

        <div className="editor-container">
            <AceEditor
              value={this.state.value}
              style={{width: "100%", height: "100%"}}
              mode={this.props.mode}
              editorProps={{ $blockScrolling: true }}
              onChange={this.onChange}
              enableSnippets
            />
            {this.getValidationMessage()}
        </div>
      </div>
    );
  }
}

export default UnityCodeEditor;