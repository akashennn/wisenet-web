import React from "react";
import styled from "styled-components";
import { TCategory } from "../../types";
import Category from "./Category";

type TProps = {
  categories: TCategory[];
};

const Sidebar = ({ categories }: TProps): JSX.Element => {
  return (
    <Container>
      <ul>
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  grid-area: sidebar;
  background-color: lavender;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 0 0 0 8px;
    padding: 8px 0;
  }
`;

export default Sidebar;
