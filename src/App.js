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
import PostsTodods from './v1/components/PostsTodods';
import Footer from './v1/components/Footer';
import ButtonsAndIcons from './v1/components/ButtonsAndIcons.';
import Categories from './v1/components/Categories';
import PostModal from './v1/components/PostModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsPages from './v1/components/PostsPages';
import Home from './v1/components/Home';
import Comments from './v1/components/Comments';
import Users from './v1/components/Users';

class App extends Component {


  postModal = () => {
    return ( <div id="post-modal" className="modal">
      <div className="modal-content">
        <h4>Add Post</h4>
        <form>
          <div className="input-field">
            <input type="text" id="title">
            <label for="title">Title</label>
            </input>
          </div>
          <div className="input-field">
            <select>
              <option value="" disabled selected>Select option</option>
              <option value="1">Web Development</option>
              <option value="2">Graphic Design</option>
              <option value="3">Tech Gadgets</option>
              <option value="4">Other</option>
            </select>
            <label>Category</label>
          </div>
          <div className="input-field">
            <textarea name="body" id="body" className="materialize-textarea"></textarea>
            <label for="body">Body</label>
          </div>
        </form>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close btn blue white-text">Submit</a>
        </div>
      </div>
    </div>)
     }


  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home } />
            <Route exact path="/posts" component={PostsPages} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/users" component={Users} />
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
