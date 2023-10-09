import Navbar from './components/Navbar'
import React from 'react'
import News from './components/News';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
} from "react-router-dom";
const pageSize=9;
const country="in";
const apikey=process.env.REACT_APP_NEWS_API;

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
  <Route path="/"  element={  <News    key="general" pageSize={pageSize} apikey={apikey} country={country} category="general"/>}></Route> 
  <Route path="/entertainment" element={  <News   key="entertainment" pageSize={pageSize} apikey={apikey} country={country} category="entertainment"/>}></Route> 
  <Route path="/general" element={  <News   key="general" pageSize={pageSize} apikey={apikey} country={country} category="general"/>}></Route> 
  <Route path="/health" element={  <News   key="health" pageSize={pageSize} apikey={apikey} country={country} category="health"/>}></Route> 
  <Route path="/science" element={  <News   key="science" pageSize={pageSize} apikey={apikey} country={country} category="science"/>}></Route> 
  <Route path="/sports" element={  <News   key="sports" pageSize={pageSize} apikey={apikey} country={country} category="sports"/>}></Route>  
  <Route path="/technology" element={  <News   key="technology" pageSize={pageSize} apikey={apikey} country={country} category="technology"/>}></Route> 
  </Route>
));

const App =()=> {
  return (
    <RouterProvider router={router}/>
  )
}
export default App

