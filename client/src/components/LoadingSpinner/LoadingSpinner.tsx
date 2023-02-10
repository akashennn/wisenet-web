import React from "react";
import styled from "styled-components";

const LoadingSpinner = (): JSX.Element => {
  return (
    <Container>
      <p className="text">Loading..</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  .text {
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    margin: 0;
    align-items: center;
  }
`;

export default LoadingSpinner;
