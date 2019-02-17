import React, { Component } from 'react';
import $ from 'jquery/dist/jquery.js';
import Materialize
 from 'jquery/dist/jquery.js';


export default class Todos extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="col s12 m6 14">
        <div className="card">
          <div className="card-content">
            <span className="cad-title"> Quick Todos</span>
            <form id="todo-form">
              <div className="input-field">
                <input id="todo" type="text" placeholder="Add a todo" />
              </div>
            </form>
            <ul className="collection todos">
              <li className="collection-item">
                <div>
                  {' '}
                  Todo One
                  <a href="!#" className="secondary-content delete">
                    <i className="material-icons ">close</i>{' '}
                  </a>
                </div>
              </li>
              <li className="collection-item">
                <div>
                  {' '}
                  Todo Two
                  <a href="#!" className="secondary-content delete">
                    <i className="material-icons">close</i>{' '}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
