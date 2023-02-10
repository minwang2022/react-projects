import './App.css';
import React from "react";
import Slides from './components/slide-show'

function App({slides}) {
  return (
    <div>
      <h1>hello</h1>
      <Slides slides = {slides}/>  
    </div>
    
  );
}

export default App;
