import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  return (
    <div>
      <h2>404</h2>

      <p>page not found</p>

      <Link to="/">back home</Link>
    </div>
  );
};

export default ErrorPage;
