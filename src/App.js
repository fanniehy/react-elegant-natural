import React, { Component } from 'react';
import './common.css';
import Router from './router';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	    	<div className="App">
	    		<Router></Router>
	    	</div>
    	</BrowserRouter>
    )
  }
}

export default App;
// 