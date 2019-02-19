import React, { Component, Fragment } from 'react';


export default class PostModal extends Component {


postModal = () => {
     return  <div id="post-modal" className="modal">
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
     </div>
      }

  render() {
    
      
    return (
      <Fragment>

      {this.postModal()}
      </Fragment>
    );
  }
}
