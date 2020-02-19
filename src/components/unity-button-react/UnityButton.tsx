import React, { Component } from 'react';

import '@bit/smartworks.unity.unity-button'


interface IRecipeProps {
  label?: string;
  gradient?: boolean;
  outlined?: boolean;
  danger?: boolean;

  leftIcon?: string;
  rightIcon?: string;
  centerIcon?: string;
  loading?: boolean;
  disabled?: boolean;
  small?: boolean;
  onClick?: void;
}

interface IRecipeState {
}

export default class UnityButton extends Component<IRecipeProps, IRecipeState> {
  render() {
    const {
      label,
      gradient,
      outlined,
      danger,
      leftIcon,
      rightIcon,
      centerIcon,
      loading,
      disabled,
      small,
      onClick=()=>{}
    } = this.props
    let btnProps: {[k: string]: any} = {
      label,
      leftIcon,
      rightIcon,
      centerIcon,
      onClick: !disabled ? onClick : ()=>{}
    }

    //Add boolean props
    if (gradient) {
      btnProps.gradient = gradient
    }
    if (outlined) {
      btnProps.outlined = outlined
    }
    if (danger) {
      btnProps.danger = danger
    }
    if (loading) {
      btnProps.loading = loading
    }
    if (disabled) {
      btnProps.disabled = disabled
    }
    if (small) {
      btnProps.small = small
    }

    return (
      <unity-button
        {...btnProps}
      ></unity-button>
    )

  }
}
