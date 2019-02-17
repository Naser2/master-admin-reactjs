import React, { Component } from 'react'
import M from 'materialize-css/dist/css/materialize.min.css'
import $ from 'jquery/dist/jquery.js';

export default class Nav extends Component {

  componentDidMount(){

  }
  render() {
    return (
      <div>
        <nav className="blue darken-2">
          <div className="container">
            <div className="nav-wrapper">
              <a href="!#" className="brand-logo">YouLive</a>
              <a href="!#" data-activates="side-nav" className="button-collapse show-on-large right">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li className="active">
                  <a href="index.html" alt="#">Dashboard</a>
                </li>
                <li>
                  <a href="videos.html">Chanels</a>
                </li>
                <li>
                  <a href="posts.html">Posts</a>
                </li>
                <li>
                  <a href="categories.html">Categories</a>
                </li>
                <li>
                  <a href="comments.html">Comments</a>
                </li>
                <li>
                  <a href="users.html">Users</a>
                </li>
              </ul>
              {/* Side nav */}
              <ul id="side-nav" className="side-nav">
                <li>
                  <div className="user-view">
                    <div className="background">
                      <img src="img/ocean.jpg" alt=""/>
                    </div>
                    <a href="!#">
                      <img src="img/nas.jpg" alt="" className="circle"/>
                    </a>
                    <a href="!#">
                      <span className="name white-text">Nas Sanou</span>
                    </a>
                    <a href="!#">
                      <span className="email white-text">nasssersanou23@gmail.com</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="index.html">
                    <i className="material-icons">dashboard</i> Dashboard</a>
                </li>
                <li>
                  <a href="posts.html">Posts</a>
                </li>
                <li>
                  <a href="categories.html">Categories</a>
                </li>
                <li>
                  <a href="comments.html">Comments</a>
                </li>
                <li>
                  <a href="users.html">Users</a>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li>
                  <a className="subheader" href="!#">Account Controls</a>
                </li>
                <li>
                  <a href="login.html" className="waves-effect">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
