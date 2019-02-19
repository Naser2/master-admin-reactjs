import React, { Fragment,Component } from 'react'
import Categories from './Categories';

export default class ButtonsAndIcons extends Component {
  render() {
    return (
   
        <Fragment>  
        <div class="fixed-action-btn">
          <a href="#post-modal" 
          class="modal-trigger btn-floating btn-large red">
            <i class="material-icons">add</i>
          </a>
      
          
        </div>
        
      </Fragment>
   
   
      
    )
  }
}
