import React from "react";
import { TSidebarCategory } from "../../types";

type TProps = {
  sidebarCategory: TSidebarCategory;
};

const Category = ({ sidebarCategory }: TProps): JSX.Element => {
  return (
    <li>
      <a href="">{sidebarCategory.name}</a>
    </li>
  );
};

export default Category;
