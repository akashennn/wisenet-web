import React from "react";
import { TChildCategory } from "../../types";

type TProps = {
  childCategory: TChildCategory;
};

const ChildCategory = ({ childCategory }: TProps): JSX.Element => {
  return (
    <li>
      <a href="">{childCategory.name}</a>
    </li>
  );
};

export default ChildCategory;
