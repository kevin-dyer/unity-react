import React, { CSSProperties } from "react";
import AceEditor from "react-ace";
//NOTE: webpack-resolver prevents this component from being used in apps without webpack
// import "ace-builds/webpack-resolver.js"
import "ace-builds/src-noconflict/mode-json5";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-textmate";
import UnityTypography from "@bit/smartworks.unity-react.unity-typography-react";

import './UnityCodeEditor.css';

/**
 * A code editor for different languages, based on Ace editor.
 * @example
 * <CodeEditor mode="javascript" label="JSON editor"/>
 */

export type EditorType = "json" | "json5" | "javascript" | "python" | "golang" | "sql" | "dockerfile" | "markdown" | "html" | "yaml";

export interface CodeEditorStylesI extends CSSProperties {
  '--gutter-color'?: string,
  '--fold-color'?: string,
  '--active-color'?: string
}

export interface CodeEditorProps {
  mode: EditorType,
  value: string,
  onChange: Function,
  label?: string,
  dirty?: boolean,
  minLines?: number,
  maxLines?: number,
  error?: string,
  validation?: Function,
  readOnly?: boolean,
  highlightActiveLine?: boolean,
  showLineNumbers?: boolean,
  tabSize?: number,
  flexibleHeight?: boolean,
  style?: CodeEditorStylesI
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
      error: errorText='',
      readOnly=false,
      highlightActiveLine=true,
      showLineNumbers=true,
      tabSize=2,
      flexibleHeight=false
    } = this.props
    const { error='' } = this.state
    const editorWrapperClass = (errorText || error)? "editor-wrapper invalid" : "editor-wrapper"

    const editorStyle : CSSProperties = { width: '100%' }
    if (flexibleHeight) editorStyle.position = 'absolute' // needed for scrolling

    return (
      <div className={editorWrapperClass}>
        <div className="code-editor-paragraph label">
          <UnityTypography color="medium" size="paragraph">
            {label}
          </UnityTypography>
        </div>

        {!!dirty && <div className={dirtyGutterClass}/>}

        <div className={editorContainerClass}>
          <AceEditor
            value={value}
            style={editorStyle}
            theme={"textmate"}
            mode={mode === 'json' ? 'json5' : mode}
            editorProps={{ $blockScrolling: true }}
            onChange={this.handleChange}
            minLines={flexibleHeight? Infinity : minLines}
            maxLines={flexibleHeight? Infinity : maxLines}
            readOnly={readOnly}
            highlightActiveLine={highlightActiveLine}
            setOptions={{
              showLineNumbers
            }}
            tabSize={tabSize}
            wrapEnabled
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
