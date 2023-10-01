import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    pageSize:9,
    country:'in',
    category:"general"
  }
  static propTypes={
    pageSize:PropTypes.number,
    country:PropTypes.string,
    category:PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles:[],
      page:1,
      loading:false
    }
  }
   async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69f73e7612741f09d9420c7c62384bf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({articles:parseddata.articles,
      totalResults:parseddata.totalResults,
      loading:false
    })
  }
  handleprevClick=async()=>{
    console.log("I am previous");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69f73e7612741f09d9420c7c62384bf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({page:this.state.page-1,
    articles:parseddata.articles,
    loading:false
  })
  }
  handlenextClick=async()=>{
    console.log("I am Next");  
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e69f73e7612741f09d9420c7c62384bf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true}) 
   let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({page:this.state.page+1,
    articles:parseddata.articles,
    loading:false
  })
}
  render() {
    return (
      <>   
      <div className="text-center text-4xl">TOP HEADLINES </div> 
  
      {this.state.loading && <Spinner/>} 
      
       <div className='mt-5  grid grid-cols-3 gap-3'>
      {!this.state.loading && this.state.articles.map((element)=>{
      console.log(element);
        return <div key={element.url}  className=' border-solid border-2 border-slate-400 rounded-lg'>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
  })}  
  </div>
 <div className="flex justify-between mt-2">
 <button disabled={this.state.page<=1}className='h-10 w-20 pb-2 pr-3 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-slate-500'onClick={this.handleprevClick}>&larr;previous</button>
 <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}className='h-10 w-20 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-slate-500'onClick={this.handlenextClick}>Next&rarr;</button> 
 </div>  
 </>
    
    )
  }
}
