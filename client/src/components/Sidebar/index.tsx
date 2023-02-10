import React, { useEffect } from "react";
import styled from "styled-components";
import { getAllSidebarCategories } from "../../redux/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import SidebarCategory from "./SidebarItem";

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
    return <LoadingSpinner />;
  }

  // render component
  return (
    <Container>
      <ul>
        {sidebarCategories.map((sidebarCategory) => (
          <SidebarCategory
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
    padding: 12px;
  }

  .active {
    background: white;
    font-weight: bold;
  }
`;

export default Sidebar;
