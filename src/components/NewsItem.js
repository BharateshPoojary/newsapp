import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, source } = props;

  return (
    <>
      <div className="mr-2 ml-2 bg-gray-200 text-gray-800 p-1 rounded-b-2xl rounded-bl-2xl text-center">
        <b>
          <p>
            {source}&nbsp;{publishedAt}
          </p>
        </b>
      </div>
      <div className="pr-4 pl-4 pb-4 ">
        <img
          src={
            !imageUrl
              ? "https://www.hindustantimes.com/ht-img/img/2023/09/24/1600x900/F6sviebWsAALGV1_1695576127386_1695576141347.jpeg"
              : imageUrl
          }
          className="h-60 w-700 mt-3 "
          alt="..."
        />
        <div className="mr-8">
          <h5 className="card-title text-2xl text-white">{title}</h5>
          <br />
          <p className="card-text text-2xl  text-white">{description}</p>
          <div className="flex">
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className=" mt-0.5  p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-gray-200 hover:border-solid hover:border-2 hover:border-slate-500"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsItem;
