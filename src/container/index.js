//need too add in react-router to import browser history
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from '../routes/index' //links to ./routes/index.js

import Quiz from '../container/Quiz'
import ATAR from '../container/ATAR.js'
import Reverse from '../container/Reverse' 
import Home from '../container/Home' 

ReactDOM.render(
  //<Router history={hashHistory} /> //For production gotta use browserHistory with a server (look up browserHistory vs hashHistory )
  <Router 
  history = {browserHistory}
  routes = {Routes}
  />,
  document.getElementById('react-container')
);
