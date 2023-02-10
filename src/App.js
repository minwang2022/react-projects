import './App.css';
import React from "react";
import Slides from './components/slide-show';
import Articles from './components/article';

function App({slides, articles}) {
  console.log(slides,articles)
  return (
    <div>
      <h1>hello</h1>
      <Slides slides = {slides}/>  
      <Articles articles = {articles}/>
    </div>
    
  );
}

export default App;
