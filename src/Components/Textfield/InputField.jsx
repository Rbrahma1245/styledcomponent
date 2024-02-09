import { Component } from "react";
import styled from "styled-components";

class InputField extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div>
          <Input placeholder="A small text input"/>
          <br />
          <Input placeholder="A bigger text input" $size="2em" $password />
        </div>
      </>
    );
  }
}

export default InputField;

const Input = styled.input.attrs((props) => ({
  // we can define static props
  // type: "text",

  // or we can define dynamic ones
  $size: props.$size || "1em",

  type: props.$password ? "password" : "text",
}))`
  color: #bf4f74;
  font-size: 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.$size};
  padding: ${(props) => props.$size};
`;
