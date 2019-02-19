import React, { Component, Fragment } from 'react'

const  unloggedNav = () => {
  return ( 
  <Fragment>
      <nav className="blue darken-2">
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Youlive</a>
        </div>
      </div>
      </nav>
  </Fragment>
  )
}

export default class Login extends Component {

  render() {

    return (
     <div>
     <div>
      {unloggedNav()}
    </div>

      <Fragment>
      <section className="section section-login">
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2 16 offset-13">
            <div className="card-panel login blue darken-2 white-text center">
              <h2>Youlive Login</h2>
              <form action="/">
                  <div className="input-field">
                    <i className="class material-icons prefix">email</i>
                    <input type="email" id="email"/>
                    <label className="white-text" for="email">Email</label>
                  </div>
                  <div className="input-field">
                    <i className="class material-icons prefix">lock</i>
                    <input type="password" id="password"/>
                    <label className="white-text" htmlFor="password">Password</label>
                  </div>
                  <input type="submit" value="login" className="btn-large btn-extended grey lighten-4 black-text"/>
               </form>
            </div> 
          </div>
        </div>
      </div>
    </section>
    </Fragment>
    
     </div>


    )
  }
}


export  {unloggedNav}