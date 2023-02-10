import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = (): JSX.Element => {
  return (
    <Container>
      <p className="title">404</p>
      <p className="error">Page not found!</p>
      <Link to="/" className="button">
        Visit Home Page
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p {
    margin: 0;
  }

  .title {
    font-size: 4rem;
  }

  .error {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  .button {
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
`;

export default ErrorPage;
