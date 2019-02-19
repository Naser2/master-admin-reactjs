import React, { Component } from 'react'
import Nav from './Nav';
import Counter from './Counter';
import Stats from './Stats';
import Graph from './Graph';
import ButtonsAndIcons from './ButtonsAndIcons.';
import PostsTodods from './PostsTodods';
import Footer from './Footer';


export default class Home extends Component {
  render() {
   const  postModal = this.props.postModal
   console.log(postModal)
   const footer  = <Footer />
    return (
      <div>
        {/* <Nav /> */}
        <Counter />
        <Stats />
        <Graph />
        <PostsTodods />
        <ButtonsAndIcons />
        {postModal}
        {/* {footer} */}
      </div>
    )
  }
}
