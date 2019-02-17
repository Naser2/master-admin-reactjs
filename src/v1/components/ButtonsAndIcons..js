import React, { Fragment,Component } from 'react'
import Categories from './Categories';

export default class ButtonsAndIcons extends Component {
  render() {
    return (
      <div>
        <Fragment>  
        <div class="fixed-action-btn">
          <a class="btn-floating btn-large red">
            <i class="material-icons">add</i>
          </a>
          <ul>
            <li>
              <a href="#post-modal" class="modal-trigger btn-floating blue">
                <i class="material-icons">mode_edit</i>
              </a>
            </li>
            <li>
              <a href="#category-modal" class="modal-trigger btn-floating blue">
                <i class="material-icons">folder</i>
              </a>
            </li>
            <li>
              <a href="#user-modal" class="modal-trigger btn-floating blue">
                <i class="material-icons">supervisor_account</i>
              </a>
            </li>
          </ul>
          
        </div>
        
      </Fragment>
      {/* <Categories/> */}
      </div>
      
    )
  }
}
