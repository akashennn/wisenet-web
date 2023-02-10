import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllSidebarCategories } from "../../redux/categoriesSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Category from "./Category";

const Sidebar = (): JSX.Element => {
  // get data from redux
  const { sidebarCategories, isSidebarCategoriesLoading } = useAppSelector(
    (state) => state.categories
  );

  // redux hooks to call functions
  const dispatch = useAppDispatch();

  // fetch data on load
  useEffect(() => {
    dispatch(getAllSidebarCategories());
  }, []);

  // until data fetches
  if (isSidebarCategoriesLoading) {
    return <p>Loading..</p>;
  }

  // render component
  return (
    <Container>
      <ul>
        {sidebarCategories.map((sidebarCategory) => (
          <Category
            key={sidebarCategory.id}
            sidebarCategory={sidebarCategory}
          />
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
