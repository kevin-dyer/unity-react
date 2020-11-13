import React, { CSSProperties, Component, HTMLAttributes, SyntheticEvent } from 'react'
import '@bit/smartworks.unity.unity-core/unity-stepper'

export interface StepperProps extends HTMLAttributes<HTMLElement> {
  steps?: object,
  totalSteps?: number,
  currentStep?: number,
  valid?: boolean,
  hideButton?: boolean,
  backtrack?: boolean,
  onChangeStep?: ((event: SyntheticEvent<HTMLElement, Event>) => void)
}

export type StepperStyles = CSSProperties & {
  '--unity-stepper-step-active-color'?: string,
  '--unity-stepper-step-inactive-color'?: string,
  '--unity-stepper-spacer-color'?: string,
  '--unity-stepper-step-text-color'?: string,
  '--unity-stepper-text-size'?: string,
  '--unity-stepper-step-icon-color'?: string,
  '--unity-stepper-step-size'?: string,
  '--unity-stepper-button-min-width'?: string
}

export default class UnityStepper extends Component<StepperProps> {
  private stepperRef = React.createRef<StepperProps>()
  componentDidMount = () => {
    this.updateProps({})
  }

  componentDidUpdate = (oldProps: StepperProps) => {
    this.updateProps(oldProps)
  }

  updateProps = (oldProps={}) => {
    const {
      steps,
      onChangeStep
    } : StepperProps = this.props
    const {
      steps: oldSteps,
      onChangeStep: oldOnChangeStep
    } : StepperProps = oldProps
    const stepper = this.stepperRef.current

    if (!!stepper) {
      if (steps !== oldSteps) {
        stepper.steps = steps
      }
      if (onChangeStep !== oldOnChangeStep) {
        stepper.onChangeStep = onChangeStep
      }
    }
  }

  render() {
    const {
      valid,
      hideButton,
      backtrack,
      style: stylesProps,
      steps,
      onChangeStep,
      ...otherProps
    } : StepperProps = this.props
    let stepperProps : StepperProps = otherProps
    if (!!valid) stepperProps.valid = valid
    if (!!hideButton) stepperProps.hideButton = hideButton
    if (!!backtrack) stepperProps.backtrack = backtrack

    return (
      <unity-stepper
        ref={this.stepperRef}
        style={stylesProps}
        {...stepperProps}
      ></unity-stepper>
    )
  }
}
