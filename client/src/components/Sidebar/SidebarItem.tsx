import React from "react";
import { getCategory } from "../../redux/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TSidebarCategories } from "../../types";

type TProps = {
  sidebarCategory: TSidebarCategories;
};

const SidebarCategory = ({ sidebarCategory }: TProps): JSX.Element => {
  // get data from redux
  const { activeCategoryId } = useAppSelector((state) => state.categories);

  // redux hooks to call functions
  const dispatch = useAppDispatch();

  // fetch data on list item click
  const onClick = () => {
    dispatch(getCategory(sidebarCategory.id));
  };

  return <li onClick={onClick}>{sidebarCategory.name}</li>;
};

export default SidebarCategory;
