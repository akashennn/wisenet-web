import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Category } from "../../types";

import "./ProductListing.css";

type State = {
  categories: Category[];
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
      JSON.stringify({
        query: `{
        categories {
          name
          articleCount
          childCategories {
            name
            urlPath
          }
          articles {
              name
              variantName
              prices {
                currency
                value
              }
              images {
                path
              }
          }
        }
      }`,
      })
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    };
  }

  render() {
    var articles = this.state.categories.map((category) => {
      return category.articles.map((article) => {
        return <ArticleCard article={article} />;
      });
    });

    return (
      <div className={"page"}>
        <Header />

        <div className={"sidebar"}>
          <h3>Categories</h3>
          {this.state.categories.length ? (
            <ul>
              {this.state.categories[0].childCategories.map(
                ({ name, urlPath }) => {
                  return (
                    <li>
                      <a href={`/${urlPath}`}>{name}</a>
                    </li>
                  );
                }
              )}
            </ul>
          ) : (
            "Loading..."
          )}
        </div>

        <div className={"content"}>
          {this.state.categories.length ? (
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
          ) : (
            "Loading..."
          )}
          <div className={"articles"}>{articles}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

var PLP = () => {
  return <ArticleList />;
};

export default PLP;
