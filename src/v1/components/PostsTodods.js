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
          {/* <Fragment><div id="post-modal" class="modal">
    <div class="modal-content">
      <h4>Add Post</h4>
      <form>
        <div class="input-field">
          <input type="text" id="title">
          <label for="title">Title</label>
          </input>
        </div>
        <div class="input-field">
          <select>
            <option value="" disabled selected>Select option</option>
            <option value="1">Web Development</option>
            <option value="2">Graphic Design</option>
            <option value="3">Tech Gadgets</option>
            <option value="4">Other</option>
          </select>
          <label>Category</label>
        </div>
        <div class="input-field">
          <textarea name="body" id="body" class="materialize-textarea"></textarea>
          <label for="body">Body</label>
        </div>
      </form>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close btn blue white-text">Submit</a>
      </div>
    </div>
  </div></Fragment> */}
        </div>
      </section>
    );
  }
}
