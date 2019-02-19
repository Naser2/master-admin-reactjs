import React, { Component, Fragment } from 'react';
import Nav from './Nav';

export default class Users extends Component {
  render() {
    const action = (
      <Fragment>
        <div className="fixed-action-btn">
          <a
            href="#user-modal"
            className="modal-trigger btn-floating btn-large red"
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      </Fragment>
    );

    const userModal = (
      <Fragment>
        <div id="user-modal" class="modal">
          <div class="modal-content">
            <h4>Add User</h4>
            <form>
              <div class="input-field">
                <input type="text" id="name" />
                  <label for="name">Name</label>  
              </div>
              <div class="input-field">
                <input type="email" id="email"/>
                  <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input type="password" id="password"/>
                  <label for="password">password</label>
              </div>
              <div class="input-field">
                <input type="password" id="password2"/>
                  <label for="password2">password</label>
              </div>
            </form>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close btn blue white-text">
                Submit
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );

    return (
      <div>
      <Fragment><Nav /></Fragment>
     <Fragment><section className="section section-users grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Users</span>
                  <table className="striped">
                    <thead>
                      <tr>
                      <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Registered</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="70">
                          <img
                            src="img/person4.jpg"
                            alt=""
                            className="responsive-img circle"
                            style={{ width: '40px', marginLeft: '10px' }}
                          />
                        </td>
                        <td>Cary Blossom</td>
                        <td>mikeblossom@gmail.com</td>
                        <td>Sep, 4 2018</td>
                        <td>
                          <a href="/details" className="btn blue lighten-2">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="70">
                          <img
                            src="img/mike.jpg"
                            alt=""
                            className="responsive-img circle"
                            style={{ width: '40px', marginLeft: '10px' }}
                          />
                        </td>
                        <td>Mike Blossom</td>
                        <td>mikeblossom@gmail.com</td>
                        <td>Feb, 18 2019</td>
                        <td>
                          <a href="/details" className="btn blue lighten-2">
                            Details
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
                        <td>Larry Waters</td>
                        <td>larrywatters@gmail.com</td>
                        <td>Jan, 2 2019</td>
                        <td>
                          <a href="/details" className="btn blue lighten-2">
                            Details
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
                        <td>Jenifer Salim</td>
                        <td>jensalim44@gmail.com</td>
                        <td>Feb, 5 2019</td>
                        <td>
                          <a href="/details" className="btn blue lighten-2">
                            Details
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
                        <td>Jered Binaker</td>
                        <td>jered1.binaker@hotmail.com</td>
                        <td>Dec, 10 2018</td>
                        <td>
                          <a href="/details" className="btn blue lighten-2">
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
          {action};
          {userModal}
        </div>
      </section></Fragment></div>
    );
  }
}
