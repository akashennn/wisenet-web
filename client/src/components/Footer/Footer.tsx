import React from "react";
import styled from "styled-components";

const Footer = (): JSX.Element => {
  return (
    <Container>
      <p className="title">All Prices are in Sri Lankan rupees</p>
    </Container>
  );
};

const Container = styled.div`
  grid-area: footer;
  background-color: lightblue;
  text-align: center;
  display: flex;
  padding: 12px;
  justify-content: center;
  box-sizing: border-box;

  .title {
    margin: 0;
  }
`;

export default Footer;
