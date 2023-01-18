import React from "react";
import blogData from "../data/blog";
import Header from '../components/Header'
import About from "./About";
import ArticleList from "./ArticleList"

  
console.log(blogData);

function App(props) {
  return (
    <div className="App">
      

      <h1><Header parentheader="Moringa blog"/></h1>
      <About image="https://via.placeholder.com/215" paragraph="_about_text"/>
      <ArticleList title="Moringa blog" when="18/01/2022" entails="This article is about Moringa"/>
       
    </div>
  );
}

export default App;
