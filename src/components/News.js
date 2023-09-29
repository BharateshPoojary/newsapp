import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      page:1
    }
  }
   async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=e69f73e7612741f09d9420c7c62384bf&page=1&pageSize=20';
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults})
  }
  handleprevClick=async()=>{
    console.log("I am previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e69f73e7612741f09d9420c7c62384bf&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({page:this.state.page-1,
    articles:parseddata.articles})
  }
  handlenextClick=async()=>{
    console.log("I am Next");
if (this.state.page+1>Math.ceil(this.state.totalResults/20)) {
  // alert("i am last");
}
 else{  
   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e69f73e7612741f09d9420c7c62384bf&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({page:this.state.page+1,
    articles:parseddata.articles})
  }
}
  render() {
    return (
      <>     
       <div className='mt-5  grid grid-cols-3 gap-3'>
      {this.state.articles.map((element)=>{
      console.log(element);
        return <div key={element.url}  className=' border-solid border-2 border-slate-400 rounded-lg'>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
  })}  
  </div>
 <div className="flex justify-between mt-2">
 <button disabled={this.state.page<=1}className='h-10 w-20 pb-2 pr-3 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-slate-500'onClick={this.handleprevClick}>&larr;previous</button><button className='h-10 w-20 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-slate-500'onClick={this.handlenextClick}>Next&rarr;</button> 
 </div>  
 </>
    
    )
  }
}
