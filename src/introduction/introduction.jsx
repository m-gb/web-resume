import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './introduction.css';

class Introduction extends Component {
  particle_params = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "size": {
        "value": 3
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  }
  render() {
    return (
      <div id="introduction">
        <Particles
          height="100vh"
          params={this.particle_params}
          className="galaxy-canvas" />
        <div className="info">
          <h1><b>Maya Goldberg</b></h1>
          <span>Full Stack Developer</span>
        </div>
      </div>
    );
  }
}

export default Introduction;
