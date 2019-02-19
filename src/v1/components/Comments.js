import React, { Component, Fragment } from 'react';
import Nav from './Nav';

export default class Comments extends Component {
  
  
 render() {

    return (
      <Fragment>
        <Nav/>
        <section className="section section-comments grey lighten-4">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Comments</span>
                    <table className="striped">
                      <tbody>
                        <tr>
                          <td width="70">
                            <img
                              src="img/mike.jpg"
                              alt=""
                              className="responsive-img circle"
                              style={{ width: '40px', marginLeft: '10px' }}
                            />
                          </td>

                          <td>
                          🤣 Was just heading downtown when I saw tetur adipisicing
                            elit. Ex, nostrum.
                          </td>

                          <td>
                            <a href="#!" className="green-text">
                              <i className="material-icons">done</i>
                            </a>
                          </td>

                          <td>
                            <a href="#!" className="red-text">
                              <i className="material-icons">close</i>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td width="70">
                            <img
                              src="img/person1.jpg"
                              alt=""
                              className="responsive-img circle"
                              style={{ width: '40px', marginLeft: '10px' }}
                            />
                          </td>

                          <td>
                            That was amazing, she literally said those word sit, amet consectetur adipisicing
                            elit. Ex, nostrum.
                          </td>

                          <td>
                            <a href="#!" className="green-text">
                              <i className="material-icons">done</i>
                            </a>
                          </td>

                          <td>
                            <a href="#!" className="red-text">
                              <i className="material-icons">close</i>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td width="70">
                            <img
                              src="img/person2.jpg"
                              alt=""
                              className="responsive-img circle"
                              style={{ width: '40px', marginLeft: '10px' }}
                            />
                          </td>

                          <td>
                        SMH 🕵️‍♀️ the election is just arround the corner. Do your due diligence on each candidate folks, amet consectetur adipisicing
                            elit. Ex, nostrum.
                          </td>

                          <td>
                            <a href="#!" className="green-text">
                              <i className="material-icons">done</i>
                            </a>
                          </td>

                          <td>
                            <a href="#!" className="red-text">
                              <i className="material-icons">close</i>
                            </a>
                          </td>
                          </tr>

                          <tr>
                          <td width="70">
                            <img
                              src="img/person3.jpg"
                              alt=""
                              className="responsive-img circle"
                              style={{ width: '40px', marginLeft: '10px' }}
                            />
                          </td>

                          <td>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ex, nostrum.
                          </td>

                          <td>
                            <a href="#!" className="green-text">
                              <i className="material-icons">done</i>
                            </a>
                          </td>

                          <td>
                            <a href="#!" className="red-text">
                              <i className="material-icons">close</i>
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
          </div>
        </section>
      </Fragment>
    );
  }
}
