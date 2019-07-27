import React, { PureComponent } from "react";
import styled from "styled-components";
import { Input } from "antd";

const BetterInput = styled(Input)`
  width: 250px;
  text-align: center;
`;

class InputComponent extends PureComponent {
  keyDown = e => {
    if (e.key === "Enter") {
      this.props.onKeyEnter && this.props.onKeyEnter(e.target.value);
      return false;
    }
  };

  render() {
    const { disabled, placeholder } = this.props;
    return (
      <BetterInput
        type="text"
        onKeyDown={this.keyDown}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }
}

export default InputComponent;
