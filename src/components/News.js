import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfinitScroll from "react-infinite-scroll-component";
import bgimage from "./bgimg4.jpg";
import LoadingBar from "react-top-loading-bar";
// import News from "./News";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = capitalizeFirstLetter(`${props.category}-News Bazaar`);
  const updateNews = async () => {
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setProgress(50);
    let parseddata = await data.json();
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    setProgress(100);
  };
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchNextarticles = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
    setLoading(false);
  };

  return (
    <>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <div 
        style={{

          position:"relative",
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center text-4xl text-white">
          TOP <b>{capitalizeFirstLetter(props.category)} </b>
          HEADLINES
        </div>
       
        {loading && <Spinner />}
        <InfinitScroll
          dataLength={articles.length}
          next={fetchNextarticles}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="mt-5  grid grid-cols-3 gap-3">
            {articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className=" border-solid border-2 border-slate-300 rounded-lg"
                >
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
};
News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
