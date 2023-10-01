import React, { Component } from 'react'

export default class NewsItem extends Component {
constructor(){
  super();
  console.log("I am constructor");
}
 
  
  render() {
    let {title,description,imageUrl,newsUrl,publishedAt,source}=this.props;
    
   return (
        < >
        
            <div className='mr-2 ml-2 bg-gray-700 text-slate-300 p-1 rounded-b-2xl rounded-bl-2xl text-center'>
            <b><p>{source}&nbsp;{publishedAt}</p></b>
            </div>
            <div className="pr-4 pl-4 pb-4 ">
          <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/09/24/1600x900/F6sviebWsAALGV1_1695576127386_1695576141347.jpeg":imageUrl} className="h-60 w-700 mt-3 " alt="..."/>
            <div className="mr-8">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          
            <div className="flex">
              <a  rel="noreferrer"  href={newsUrl} target='_blank' className=" mt-0.5 p-2 rounded-lg bg-gray-700 text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-slate-500">Read More</a> 
            </div>
            </div>
            </div>
        </>
    )
  }
}
