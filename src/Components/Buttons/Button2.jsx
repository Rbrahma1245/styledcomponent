import { Component } from "react";
import styled from "styled-components";

class Button2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Button>Normal </Button>
        <Button $primary>Primary</Button>

        <YellowButton>Yellow</YellowButton>
      </>
    );
  }
}

export default Button2;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

const YellowButton = styled(Button)`
  background: #e8c872;
  color: green;
`;
