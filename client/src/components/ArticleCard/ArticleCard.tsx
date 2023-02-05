import React from "react";
import styled from "styled-components";
import { TArticle } from "../../types";

var intlNumberFormatValues = ["en-US", "currency", "LKR"];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

const ArticleCard = ({ article }: { article: TArticle }): JSX.Element => {
  return (
    <Container>
      <img src={article.images[0].path} />

      <div>{article.name}</div>

      <div>{formatter.format(article.prices.value / 100)}</div>

      <section role="button">Add to cart</section>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid lavenderblush;
  padding: 10px;

  section[role="button"] {
    padding: 0.2em;
    background-color: lightgoldenrodyellow;
    border: 1px solid lightgray;
    cursor: pointer;
    text-align: center;
  }
`;

export default ArticleCard;
