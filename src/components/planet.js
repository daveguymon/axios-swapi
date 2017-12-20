import React, { Component } from 'react';

export default class Planet extends Component {
  
  render() {
    return (
      <div>
        <h2>{this.props.planet.name}</h2>
      </div>
    )
  }
}
