import React, { Component, Fragment } from 'react';
import $ from 'jquery/dist/jquery.js';
import Preloader from './Preloader';

export default class Stats extends Component {
  componentDidMount() {
    // $('.section').hide();
    // setTimeout(() => {
    //   $('section').fadeIn();
    // }, 4000);
  }
  render() {
    return (
      <div>
        <Fragment>
          <Preloader/>
          <section className="section section-stats center">
            <div className="row">
              <div className="col s12 m6 13">
                <div className="card-panel blue lighten-1 white-text center">
                  <i className="material-icons medium">insert_emoticon</i>
                  <h5>Monthly Visitors</h5>
                  <h3 className="count">29367</h3>
                  <div className="progress grey lighten-1">
                    <div
                      className="determinate white"
                      style={{ width: '40%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col s12 m6 13">
                <div className="card-panel center">
                  <i className="material-icons medium">mode_edit</i>
                  <h5>Blog Posts</h5>
                  <h3 className="count">105</h3>
                  <div className="progress grey lighten-1">
                    <div
                      className="determinate blue lighten-1"
                      style={{ width: '20%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col s12 m6 13">
                <div className="card-panel blue lighten-1 white-text center">
                  <i className="material-icons medium">mode_comment</i>
                  <h5>Comments</h5>
                  <h3 className="count">1200</h3>
                  <div className="progress grey lighten-1">
                    <div
                      className="determinate white"
                      style={{ width: '40%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col s12 m6 13">
                <div className="card-panel center">
                  <i className="material-icons medium">supervisor_account</i>
                  <h5>Users</h5>
                  <h3 className="count">365</h3>
                  <div className="progress grey lighten-1">
                    <div
                      className="determinate blue lighten-1"
                      style={{ width: '10%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      </div>
    );
  }
}
