import React from "react";
import styled from "styled-components";

const LoadingSpinner = (): JSX.Element => {
  return (
    <Container>
      <p className="no-data-found-text">Loading..</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  .no-data-found-text {
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    margin: 0;
    align-items: center;
  }
`;

export default LoadingSpinner;
