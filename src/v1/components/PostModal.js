import React, { Component } from 'react'

export default class PostModal extends Component {
  render() {
    return (
      <div>
          <div id="post-modal" class="modal">
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
  </div>
      </div>
    )
  }
}
