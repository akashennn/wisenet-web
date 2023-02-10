import React, { useEffect } from "react";
import styled from "styled-components";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import EmptyResult from "../../components/EmptyResult/EmptyResult";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getCategory } from "../../redux/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ProductListingPage = (): JSX.Element => {
  // get data from redux
  const { category, activeCategoryId, isCategoryLoading, searchText } =
    useAppSelector((state) => state.categories);

  // redux hooks to call functions
  const dispatch = useAppDispatch();

  // fetch initial data on load
  useEffect(() => {
    dispatch(getCategory(activeCategoryId));
  }, []);

  // until data fetches
  if (isCategoryLoading) {
    return <LoadingSpinner />;
  }

  // if category is not found
  if (category === null) {
    return <EmptyResult text="Invalid Category!" />;
  }

  // if no data found in the category
  if (category.articles.length === 0) {
    return <EmptyResult text={`No data found in ${category.name} category`} />;
  }

  // if no search result in the category
  if (
    category.articles.filter((article) =>
      article.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    ).length === 0
  ) {
    return (
      <EmptyResult
        text={`No results found for "${searchText}" in ${category.name} category`}
      />
    );
  }

  return (
    <Container>
      <div className="articles">
        {category.articles
          .filter((article) =>
            article.name
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )
          .map((article) => (
            <ArticleCard article={article} key={article.name} />
          ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* styles for mobile devices */
  display: flex;
  flex: 1;
  flex-direction: column;

  .no-data-found-text {
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    margin: 0;
    align-items: center;
  }

  .articles {
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    margin-bottom: 12px;
  }

  .category-name {
    margin: 0 0 12px 0;
    font-weight: bold;
    color: rgb(61, 61, 61);
    font-size: 1.25rem;
    line-height: 31px;
  }

  /* styles for tablets */
  @media (min-width: 768px) {
  }

  /* styles for desktops */
  @media (min-width: 1024px) {
    .articles {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
  }
`;

export default ProductListingPage;
