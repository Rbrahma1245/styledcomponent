import styled from "styled-components";

function Wrapper() {
  return (
    <>
      <WrapText>
        <Title>TITLE of the Wrapper component</Title>
        THIS IS WRAPPER COMPONENT
      </WrapText>
    </>
  );
}

export default Wrapper;

const WrapText = styled.section`
  padding: 3em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
