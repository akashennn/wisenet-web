import React from "react";
import styled from "styled-components";
import { TArticle } from "../../types";
import { formatter } from "../../utils/currency";
import Button from "../Button/Button";

const ArticleCard = ({ article }: { article: TArticle }): JSX.Element => {
  return (
    <Container>
      <img className="image" src={article.images[0].path} alt={article.name} />

      <p className="name">{article.name}</p>

      <p className="price">{formatter.format(article.prices.value / 100)}</p>

      <Button title="Add to cart" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid lavenderblush;
  padding: 12px;

  .image {
    object-fit: cover;
    height: 290px;
    width: 100%;
  }

  .name {
    margin: 12px 0;
    font-weight: bold;
    color: rgb(61, 61, 61);
    font-size: 1.25rem;
    line-height: 19px;
  }

  .price {
    margin: 0 0 12px 0;
    font-size: 1rem;
    line-height: 19px;
    color: rgb(64, 69, 83);
  }
`;

export default ArticleCard;
