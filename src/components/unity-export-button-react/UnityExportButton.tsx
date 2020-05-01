import React, { Component } from 'react'
import '@bit/smartworks.unity.unity-table-export'
import { ExportButtonProps, ExportButtonStyles } from '@bit/smartworks.unity.unity-table-export'

export default class UnityExportButton extends Component<ExportButtonProps> {

  private exportButtonRef = React.createRef<ExportButtonProps>()

  componentDidMount = () => {
    this.updateProperties()
  }

  componentDidUpdate(oldProps: ExportButtonProps) {
    this.updateProperties(oldProps)
  }

  updateProperties(oldProps={}) {
    const {
      tableRef,
      onExport,
      style
    } : ExportButtonProps = this.props

    const {
      tableRef: oldTableRef,
      onExport: oldOnExport,
      style: oldStyle,
    } : ExportButtonProps = oldProps

    const exportButton = this.exportButtonRef.current
    if (!!exportButton) {
      if (oldTableRef !== tableRef) exportButton.tableRef = tableRef
      if (oldOnExport !== onExport) exportButton.onExport = onExport
      if (oldStyle !== style) exportButton.style = style
    }
  }

  render() {
    const {
      label,
      leftIcon,
      rightIcon,
      centerIcon,
      type,
      danger,
      loading,
      small
    } = this.props

    const buttonProps : ExportButtonProps = {}
    if (!!danger) buttonProps.danger = danger
    if (!!loading) buttonProps.loading = loading
    if (!!small) buttonProps.small = small

    return <div style={styles.container}>
        <unity-table-export
          ref={this.exportButtonRef}
        >
          <unity-button
            label={label}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            centerIcon={centerIcon}
            type={type}
            {...buttonProps}
          ></unity-button>
        </unity-table-export>
    </div>
  }
}

const styles : ExportButtonStyles = {
  container: {
    flex: 1,
    position: 'relative'
  }
}

