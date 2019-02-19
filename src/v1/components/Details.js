import React, { Component, Fragment } from 'react'
import Nav from './Nav';

export default class Details extends Component {

postForm =()=> {
  return (<form>
           <div className="input-field">
             <input type="text" id="title" value="Post One"/>
             <label for="title">Post</label>
           </div>
           <div className="input-field">
             <select>
               <option value="" disabled selected>Select option</option>
               <option value="1" selected>Web Development</option>
               <option value="2">Graphic Design</option>
               <option value="3">Tech Gadgets</option>
               <option value="4">Other</option>
             </select>
             <label>Posts</label>
           </div>
           <div className="input-field">
             <textarea name="body" id="body" className="materialize-textarea">This was a post on react Hooks that i thought was very important in getting started ....</textarea>
             <label for="body"></label>
           </div>
         </form>)
}
  render() {

    return (
      <Fragment>
        <Nav />
        <section class="section section-details grey lighten-4">
            <div class="container">
              <div class="row">
                <div class="col s12">
                  <div class="card">
                    <div class="card-content">
                    <div className="row">
                    <div className="col s12 m6">
                    <span class="card-title">Posts Details</span>
                    </div>
                    <div className="col s12 m6">
                    <img
                              src="img/mike.jpg"
                              alt=""
                              className="responsive-img circle"
                              style={{ width: '40px', marginLeft: '10px' }}
                            />
                            <p>Posted By Mike Blossom</p>
                            <p>on Jan 12 2019</p>
                      </div>
                    </div>
                     {this.postForm()}
                    </div>
                    <div class="card-action">
                    <button className="btn green"> Save</button>
                    <button className="btn formbtn-red red"> Delete</button>
                    </div>
                  </div>              
                </div>
              </div>
            </div>         
          </section>  
      </Fragment>
    )
  }
}
