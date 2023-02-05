import React from "react";
import styled from "styled-components";

const Header = (): JSX.Element => {
  return (
    <Container>
      <strong>SHINE INT</strong>

      <input placeholder="Search" />
    </Container>
  );
};

const Container = styled.div`
  grid-area: header;
  background-color: lightblue;

  input {
    float: right;
  }
`;

export default Header;
