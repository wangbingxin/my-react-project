import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import One from './views/One'
import Two from './views/Two'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/one'>第一页</Link>
          <Link to='/two'>第二页</Link>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/one' component={One} />
            <Route path='/two' component={Two} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
