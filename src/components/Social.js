import React, {Component} from 'react';
import {render} from 'react-dom';

import '../static/css/Social.css'

class Social extends Component {
  render() {
    return(
      <div id="social_wrapper">
        <div id="social">
          <a href="https://www.facebook.com/" target="_blank" id="facebook_icon"></a>
          <a href="https://twitter.com/" target="_blank" id="twitter_icon"></a>
          <a href="https://instagram.com/" target="_blank" id="instagram_icon"></a>
        </div>
    </div>
    );
  }
}

export default Social;
