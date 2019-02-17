import $ from 'jquery/dist/jquery.js';

import React, { Component } from 'react';

export default class Counter extends Component {

  componentDidMount() {
    $('.section').hide();
    // $('.section section-visitors').hide()
     
    setTimeout(() => {
      $('section').fadeIn();
      // $('.section section-visitors').fadeIn()
      //Hide Preloader
      $('.loader').fadeOut()
      $('.count').each(function() {
        $(this)
          .prop('Counter', 0)
          .animate(
            {
              Counter: $(this).text()
            },
            {
              duration: 1400,
              easing: 'swing',
              step: now => {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    }, 1000);
    
  }
  render() {
    return <div />;
  }
}
