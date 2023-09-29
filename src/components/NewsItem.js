import React, { Component } from 'react'

export default class NewsItem extends Component {
constructor(){
  super();
  console.log("I am constructor");
}
 
  
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    
   return (
        < div className='p-3 ' >
          
          <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/09/24/1600x900/F6sviebWsAALGV1_1695576127386_1695576141347.jpeg":imageUrl} className="h-60 w-700 " alt="..."/>
            <div className="mr-8">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="flex">
            <a  rel="noreferrer"  href={newsUrl} target='_blank' className=" mt-0.5 p-2 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-slate-500">Read More</a> 
            </div>
            </div>
        </div>
    )
  }
}
