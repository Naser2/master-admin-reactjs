import React, { Component, Fragment } from 'react';
// import logo from './v1//components/favicon.png';
// import './App.css';
import Nav from './v1/components/Nav';
import 'materialize-css/dist/css/materialize.min.css';
import Stats from './v1/components/Stats';
import Counter from './v1/components/Counter';
import Chart from './v1/components/Chart';
import Graph from './v1/components/Graph';
import LatestComents from './v1/components/LatestComments';
import PostsTodods from './v1/components/PostsTodods';
import Footer from './v1/components/Footer';
import ButtonsAndIcons from './v1/components/ButtonsAndIcons.';
import Categories from './v1/components/Categories';
import PostModal from './v1/components/PostModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Counter />
        <Stats />
        {/* <Chart/> */}
        <Graph />
        <PostsTodods />
        <ButtonsAndIcons />
        
        <Footer />
        
        <Fragment>
          {/* <Footer/> */}
          {/* <footer id="section-footer" class="section blue darken-2 white-text center">
            <p>Master Admin Panel Copyright &copy; 2019</p>
          </footer> */}
        </Fragment>
    
      </div>
    );
  }
}

export default App;
