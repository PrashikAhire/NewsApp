import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import { 
BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";



const App =()=> { 
  const pageSizes =  5;
  const apiKey = process.env.REACT_APP_NEWS_KEY1;
  
  const [progress, setProgress] = useState(0)
  

    return (
      <>
      <Router>
      <div>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
      />
      <Navbar/>
        <Routes>
      <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="home" pageSize = {pageSizes} country ={'us'}  category = 'general'/>} />
      <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize = {pageSizes} country ={'us'}  category = 'business'/>} />
      <Route exact path="/entertainment"    element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize = {pageSizes} country ={'us'} category = 'entertainment'/>} />
      <Route exact path="/general" element={<News setProgress = {setProgress}  apiKey={apiKey} key="general" pageSize = {pageSizes} country ={'us'} category = 'general'/>} />
      <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize = {pageSizes} country ={'us'} category = 'health'/>} />
      <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey} key="science"  pageSize = {pageSizes} country ={'us'} category = 'science'/>} />
      <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key="sports"  pageSize = {pageSizes} country ={'us'} category = 'sports'/>} />
      <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey}  key="technology" pageSize = {pageSizes} country ={'us'} category = 'technology'/>} />
        </Routes>
      </div> 
      </Router>
      </>
    )
  
}

export default App
