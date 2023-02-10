import React from "react";
import styled from "styled-components";
import { setSearchText } from "../../redux/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Input from "../Input/Input";

const Header = (): JSX.Element => {
  // get data from redux
  const { searchText } = useAppSelector((state) => state.categories);

  // redux hooks to call functions
  const dispatch = useAppDispatch();

  return (
    <Container>
      <p className="title">SHINE INT</p>

      <Input
        placeholder="Search..."
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: header;
  box-sizing: border-box;
  background-color: lightblue;
  padding: 24px 12px;

  .title {
    font-weight: bold;
    color: rgb(61, 61, 61);
    font-size: 1.25rem;
    margin: 0 0 24px 0;
  }

  /* styles for tablets */
  @media (min-width: 768px) {
  }

  /* styles for desktops */
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    .title {
      margin: 0;
    }
  }
`;

export default Header;
