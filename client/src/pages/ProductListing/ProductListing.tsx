import React, { useEffect } from "react";
import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { getCategory } from "../../redux/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ProductListingPage = (): JSX.Element => {
  // get data from redux
  const { category, activeCategoryId, isCategoryLoading } = useAppSelector(
    (state) => state.categories
  );

  // redux hooks to call functions
  const dispatch = useAppDispatch();

  // fetch data on load
  useEffect(() => {
    dispatch(getCategory(activeCategoryId));
  }, []);

  // until data fetches
  if (isCategoryLoading) {
    return <p>Loading..</p>;
  }

  // incase category not found
  if (category === null) {
    return <p>Category data not found!</p>;
  }

  // render component
  return (
    <Container>
      <h1>
        {category.name}
        <small> ({category.articleCount})</small>
      </h1>

      <div className="articles">
        {/* incase articles not found */}
        {category.articles.length === 0 ? (
          <p>No data found</p>
        ) : (
          category.articles.map((a) => <ArticleCard article={a} key={a.name} />)
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .articles {
    display: grid;
    grid-gap: 26px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export default ProductListingPage;
