import React from "react";
import { TCategory } from "../../types";
import ChildCategory from "./ChildCategory";

type TProps = {
  category: TCategory;
};

const Category = ({ category }: TProps): JSX.Element => {
  return (
    <li>
      <a href="">{category.name}</a>

      <ul>
        {category.childCategories.map((childCategory) => (
          <ChildCategory childCategory={childCategory} />
        ))}
      </ul>
    </li>
  );
};

export default Category;
