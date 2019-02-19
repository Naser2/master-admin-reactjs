import React, { Component, Fragment } from 'react';
import Todos from './Todos';
import Footer from './Footer';
import PostModal from './PostModal';

export default class PostsTodods extends Component {
  render() {
    return (
      <section className="section section-recent">
        <div className="row">
          <div className="col s12 m18 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Recent Posts</span>
                <table className="striped">
                  <thead>
                    <tr>
                      <th>Table</th>
                      <th>Category</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Post One</td>
                      <td>Web Development</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Two</td>
                      <td>Graphic Design</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Three</td>
                      <td>Mobile Development</td>
                      <td>
                        <a href="details.html" className="btn blue lighten-2">
                          Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Todos />
         
        </div>
      </section>
    );
  }
}
