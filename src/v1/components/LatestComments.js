import React, { Component } from 'react';

export default class LatestComments extends Component {
  render() {
    return (
      // <section className="section section-visitors blue lighten-4">
      // <div className="row">
      <div className="col s12 m6 14">
        <ul className="collection with-header latest-comments">
          <li className="collection-header">
            <h5>Latest Comments</h5>
          </li>
          <li className="collection-item avatar">
            <img src="img/mike.jpg" alt="" className="circle" />
            <span className="title">John Doe</span>
            <p className="truncate">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam molestiae soluta.
            </p>
            <a href="!#" className="approve green-text">
              Approve
            </a>{' '}
            |{' '}
            <a href="!#" className="deny red-text">
              Deny
            </a>
          </li>
          <li className="collection-item avatar">
            <img src="img/person1.jpg" alt="" className="circle" />
            <span className="title">Stephane Calibs</span>
            <p className="truncate">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam molestiae soluta.
            </p>
            <a href="!#" className="approve green-text">
              Approve
            </a>{' '}
            |{' '}
            <a href="!#" className="deny red-text">
              Deny
            </a>
          </li>
          <li className="collection-item avatar">
            <img src="img/person3.jpg" alt="" className="circle" />
            <span className="title">Hellen Jhonson</span>
            <p className="truncate">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam molestiae soluta.
            </p>
            <a href="!#" className="approve green-text">
              Approve
            </a>{' '}
            |{' '}
            <a href="!#" className="deny red-text">
              Deny
            </a>
          </li>
        </ul>
      </div>

      // </div>
      // </section>
    );
  }
}
