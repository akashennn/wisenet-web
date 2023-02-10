import React from "react";
import styled from "styled-components";

type TProps = {
  text: string;
};

const EmptyResult = ({ text }: TProps): JSX.Element => {
  return (
    <Container>
      <p className="no-data-found-text">{text}</p>
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

export default EmptyResult;
