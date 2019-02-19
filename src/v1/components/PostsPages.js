import React, { Component } from 'react'
import PostModal from './PostModal';
import ButtonsAndIcons from './ButtonsAndIcons.';
import Nav from './Nav';

export default class PostsPages extends Component {

  componentDidMount(){
    // this.props
  }
  render() {
    const action =   <ButtonsAndIcons />
    const modal = (<div id="post-modal" className="modal">
    <div className="modal-content">
      <h4>Add Post</h4>
      <form>
        <div className="input-field">
          <input type="text" id="title"/>
          <label for="title">Post</label>
        </div>
        <div className="input-field">
          <select>
            <option value="" disabled selected>Select option</option>
            <option value="1">Web Development</option>
            <option value="2">Graphic Design</option>
            <option value="3">Tech Gadgets</option>
            <option value="4">Other</option>
          </select>
          <label>Posts</label>
        </div>
        <div className="input-field">
          <textarea name="body" id="body" className="materialize-textarea"></textarea>
          <label for="body"></label>
        </div>
      </form>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close btn blue white-text">Submit</a>
      </div>
    </div>
  </div>)
    return (
      <div>
        <Nav />
        <section class="section section-posts grey lighten-4">
            <div class="container">
              <div class="row">
                <div class="col s12">
                  <div class="card">
                    <div class="card-content">
                      <span class="card-title">Posts</span>
                      <table class="striped">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date Created</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Post One</td>
                            <td>Web Development</td>
                            <td>Feb 1, 2019</td>
                            <td>
                              <a href="/details" class="btn blue lighten-2">Details</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Post Two</td>
                            <td>Graphic Design</td>
                            <td>Jan 2, 2019</td>
                            <td>
                              <a href="/details" class="btn blue lighten-2">Details</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Post Three</td>
                            <td>Web Development</td>
                            <td>Jan 3, 2019</td>
                            <td>
                              <a href="/details" class="btn blue lighten-2">Details</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Post Four</td>
                            <td>Tech Gadgets</td>
                            <td>Jan 5, 2019</td>
                            <td>
                              <a href="/details" class="btn blue lighten-2">Details</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Post Five</td>
                            <td>Graphic Design</td>
                            <td>Jan 6, 2019</td>
                            <td>
                              <a href="/details" class="btn blue lighten-2">Details</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Post Six</td>
                            <td>Web Development</td>
                            <td>Jan 7, 2019</td>
                            <td>
                              <a href="/details" class="btn blue lighten-2">Details</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-action">
                      <ul class="pagination">
                        <li class="disabled">
                          <a href="#!" class="blue-text">
                            <i class="material-icons">chevron_left</i>
                          </a>
                        </li>
                        <li class="active blue lighten-2">
                          <a href="#!" class="white-text">1</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!" class="blue-text">2</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!" class="blue-text">3</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!" class="blue-text">4</a>
                        </li>
                        <li class="waves-effect">
                          <a href="#!" class="blue-text">5</a>
                        </li>
                        <li className="waves-effect">
                          <a href="#!" class="blue-text">
                            <i class="material-icons">chevron_right</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>

              </div>
             {action}
             {modal}
            </div>
          
          </section>
       
      </div>
    )
  }
}
