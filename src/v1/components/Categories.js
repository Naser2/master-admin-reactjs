import React, { Component, Fragment } from 'react';
import ButtonsAndIcons from './ButtonsAndIcons.';
import PostModal from './PostModal';
import Counter from './Counter';
import Nav from './Nav';

export default class Categories extends Component {

  categoryModal = () => {
    return (
      <Fragment>
        <div id="category-modal" className="modal">
          <div className="modal-content">
            <h4>Add Category</h4>
            <form>
              <div className="input-field">
                <input type="text" id="title"/>
                  <label for="title">Title</label>        
              </div>
            </form>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close btn blue white-text">
                Submit
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    const action = (
      <Fragment>
        <div className="fixed-action-btn">
          <a
            href="#category-modal"
            className="modal-trigger btn-floating btn-large red"
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      </Fragment>
    );

    return (
        <Fragment>
         <Nav/>
            <section className="section section-categories grey lighten-4">
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <div className="card">
                      <div className="card-content">
                        <span className="card-title">Categories</span>
                        <table className="striped">
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Date Created</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Web Development</td>
                              <td>Feb 1, 2019</td>
                              <td>
                                <a
                                  href="/details"
                                  className="btn blue lighten-2"
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Graphic Design</td>
                              <td>Jan 2, 2019</td>
                              <td>
                                <a
                                  href="/details"
                                  className="btn blue lighten-2"
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Web Development</td>
                              <td>Jan 3, 2019</td>
                              <td>
                                <a
                                  href="/details"
                                  className="btn blue lighten-2"
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Tech Gadgets</td>
                              <td>Jan 5, 2019</td>
                              <td>
                                <a
                                  href="/details"
                                  className="btn blue lighten-2"
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Graphic Design</td>
                              <td>Jan 6, 2019</td>
                              <td>
                                <a
                                  href="/details"
                                  className="btn blue lighten-2"
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Other</td>         <td>Jan 7, 2019</td>
                              <td>
                                <a
                                  href="/details"
                                  className="btn blue lighten-2"
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card-action">
                        <ul className="pagination">
                          <li className="disabled">
                            <a href="#!" className="blue-text">
                              <i className="material-icons">chevron_left</i>
                            </a>
                          </li>
                          <li className="active blue lighten-2">
                            <a href="#!" className="white-text">
                              1
                            </a>
                          </li>
                          <li className="waves-effect">
                            <a href="#!" className="blue-text">
                              2
                            </a>
                          </li>
                          <li className="waves-effect">
                            <a href="#!" className="blue-text">
                              3
                            </a>
                          </li>
                          <li className="waves-effect">
                            <a href="#!" className="blue-text">
                              4
                            </a>
                          </li>
                          <li className="waves-effect">
                            <a href="#!" className="blue-text">
                              5
                            </a>
                          </li>
                          <li className="waves-effect">
                            <a href="#!" className="blue-text">
                              <i className="material-icons">chevron_right</i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {action}
                {this.categoryModal()}
              </div>
            </section>
       </Fragment>
    );
  }
}
