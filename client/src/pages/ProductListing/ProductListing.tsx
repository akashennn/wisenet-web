import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import { TCategory } from "../../types";

import "./ProductListing.css";

type State = {
  categories: TCategory[];
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
    return (
      <div className={"page"}>
        <Header />

        <Sidebar categories={this.state.categories} />

        <div className={"content"}>
          {this.state.categories.length ? (
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
          ) : (
            "Loading..."
          )}

          <div className={"articles"}>
            {this.state.categories.map((c) =>
              c.articles.map((a) => <ArticleCard article={a} />)
            )}
          </div>
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
