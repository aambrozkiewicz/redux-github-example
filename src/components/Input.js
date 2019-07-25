import React, { PureComponent } from "react";
import styled from "styled-components";

const BiggerInput = styled.input`
  background: transparent;
  border: 1px solid #ccc;
  padding: 0.25em;
  width: 250px;
  outline: none;
  font-size: 1.2rem;
  text-align: center;
`;

class Input extends PureComponent {
  keyDown = e => {
    if (e.key === "Enter") {
      this.props.onKeyEnter && this.props.onKeyEnter(e.target.value);
      return false;
    }
  };

  render() {
    const { disabled, placeholder } = this.props;
    return (
      <BiggerInput
        type="text"
        onKeyDown={this.keyDown}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
