import React, { Component } from "react";
import "@bit/smartworks.unity.unity-core/unity-icon";

export default class UnityIcon extends Component<IconPropsI> {
  render() {
    const { icon } = this.props;
    return <unity-icon icon={icon}></unity-icon>;
  }
}

export interface IconPropsI extends React.HTMLAttributes<HTMLElement> {
  icon: string;
}
