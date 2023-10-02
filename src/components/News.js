import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfinitScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
    document.title = this.capitalizeFirstLetter(
      `${this.props.category}-News Bazaar`
    );
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69f73e7612741f09d9420c7c62384bf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }
  fetchNextarticles = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69f73e7612741f09d9420c7c62384bf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="bg-white">
          <div className="text-center text-4xl">
            TOP <b>{this.capitalizeFirstLetter(this.props.category)} </b>
            HEADLINES
          </div>
          {this.state.loading && <Spinner />}
          <InfinitScroll
            dataLength={this.state.articles.length}
            next={this.fetchNextarticles}
            hasMore={this.state.totalResults !== this.state.articles.length}
            loader={<Spinner />}
          >
            <div className="mt-5  grid grid-cols-3 gap-3">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url}className=" border-solid border-2 border-gray-600 rounded-lg">
                    <NewsItem
                      title={element.title}
                      source={element.source.name}
                      description={element.description}
                      publishedAt={element.publishedAt}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </InfinitScroll>
        </div>
      </>
    );
  }
}
