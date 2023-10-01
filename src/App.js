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
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
  <Route path="/"  element={  <News  key="general" pageSize={9} country="in" category="general"/>}></Route> 
  <Route path="/entertainment" element={  <News key="entertainment" pageSize={9} country="in" category="entertainment"/>}></Route> 
  <Route path="/general" element={  <News key="general" pageSize={9} country="in" category="general"/>}></Route> 
  <Route path="/health" element={  <News key="health" pageSize={9} country="in" category="health"/>}></Route> 
  <Route path="/science" element={  <News key="science" pageSize={9} country="in" category="science"/>}></Route> 
  <Route path="/sports" element={  <News key="sports" pageSize={9} country="in" category="sports"/>}></Route>  
  <Route path="/technology" element={  <News key="technology" pageSize={9} country="in" category="technology"/>}></Route> 
  </Route>
));

export default class App extends Component {
   
  render() {

  
    return (
      <RouterProvider router={router}/>
    )
  }
}

