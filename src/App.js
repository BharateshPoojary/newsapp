// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
} from "react-router-dom";
const pageSize=9;
const country="in";
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
  <Route path="/"  element={  <News  key="general" pageSize={pageSize} country={country} category="general"/>}></Route> 
  <Route path="/entertainment" element={  <News key="entertainment" pageSize={pageSize} country={country} category="entertainment"/>}></Route> 
  <Route path="/general" element={  <News key="general" pageSize={pageSize} country={country} category="general"/>}></Route> 
  <Route path="/health" element={  <News key="health" pageSize={pageSize} country={country} category="health"/>}></Route> 
  <Route path="/science" element={  <News key="science" pageSize={pageSize} country={country} category="science"/>}></Route> 
  <Route path="/sports" element={  <News key="sports" pageSize={pageSize} country={country} category="sports"/>}></Route>  
  <Route path="/technology" element={  <News key="technology" pageSize={pageSize} country={country} category="technology"/>}></Route> 
  </Route>
));

export default class App extends Component {

  render() {

  
    return (
      <RouterProvider router={router}/>
    )
  }
}

