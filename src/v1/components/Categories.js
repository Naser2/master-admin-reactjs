import React, { Component } from 'react'

export default class Categories extends Component {
  render() {
    return (
      <div id="category-modal" class="modal">
            <div class="modal-content">
              <h4>Add Category</h4>
              <form>
                <div class="input-field">
                  <input type="text" id="title">
                  <label for="title">Title</label>
                  </input>
                </div>
              </form>
              <div class="modal-footer">
                <a href="#!" class="modal-action modal-close btn blue white-text">Submit</a>
              </div>
            </div>
          </div>
      
    )
  }
}
