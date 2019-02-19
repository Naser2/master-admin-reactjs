import React, { Component, Fragment } from 'react';

// import logo from './v1//components/favicon.png';
// import './App.css';
import Nav from './v1/components/Nav';
import 'materialize-css/dist/css/materialize.min.css';
import Stats from './v1/components/Stats';
import Counter from './v1/components/Counter';
import Chart from './v1/components/Chart';
import Graph from './v1/components/Graph';
import LatestComents from './v1/components/LatestComments';
import PostsTodods from './v1/components/RecentPosts';
import Footer from './v1/components/Footer';
import ButtonsAndIcons from './v1/components/ButtonsAndIcons.';
import Categories from './v1/components/Categories';
import PostModal from './v1/components/PostModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsPages from './v1/components/PostsPages';
import Home from './v1/components/Home';
import Comments from './v1/components/Comments';
import Users from './v1/components/Users';
import Login from './v1/components/Login';
import Details from './v1/components/Details';

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home } />
            <Route exact path="/posts" component={PostsPages} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </Router>
        <Footer />

        {/* <Fragment> */}
        {/* <Footer/> */}
        {/* <footer id="section-footer" class="section blue darken-2 white-text center">
            <p>Master Admin Panel Copyright &copy; 2019</p>
          </footer> */}
        {/* </Fragment> */}
      </div>
    );
  }
}

export default App;
