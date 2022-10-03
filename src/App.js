import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';


export default class App extends Component {

  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  

  state = { progress: 0 }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar color='#aaccbb' shadow={true} height={3} progress={this.state.progress} />
          <Navbar  />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} language="en" titleType='General' category='general' />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} language="en" titleType='Business' category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} language="en" titleType='Entertainment' category='entertainment' />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} language="en" titleType='Health' category='health' />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='generalo' pageSize={this.pageSize} language="en" titleType='General' category='general' />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} language="en" titleType='Science' category='science' />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} language="en" titleType='Sports' category='sports' />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} language="en" titleType='Technology' category='technology' />} />

          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}




