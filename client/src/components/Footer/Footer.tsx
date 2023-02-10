import React from "react";
import styled from "styled-components";

const Footer = (): JSX.Element => {
  return <Container>All Prices are in Sri Lankan rupees</Container>;
};

const Container = styled.div`
  grid-area: footer;
  background-color: lightblue;
  text-align: center;
  display: flex;
  padding: 12px;
  justify-content: center;
  height: 48px;
  box-sizing: border-box;
`;

export default Footer;
