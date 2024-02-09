import styled from "styled-components";

function BoxStyle() {
  return (
    <>
   <div>
    <Box />
    <PropsBox $background="blue" />
  </div>
    </>
  );
}

export default BoxStyle;

// Static object
const Box = styled.div({
    background: '#BF4F74',
    height: '50px',
    width: '50px'
  });
  
  // Adapting based on props
  const PropsBox = styled.div(props => ({
    background: props.$background,
    height: '50px',
    width: '50px'
  }));
  
