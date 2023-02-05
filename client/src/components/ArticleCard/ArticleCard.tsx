import React from "react";
import { Article } from "../../types";
import "./ArticleCard.css";

var intlNumberFormatValues = ["en-US", "currency", "LKR"];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

const ArticleCard = ({ article }: { article: Article }): JSX.Element => {
  return (
    <div className={"article"}>
      <img src={article.images[0].path} />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};

export default ArticleCard;
