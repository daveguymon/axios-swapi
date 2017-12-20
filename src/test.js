import React, { Component } from 'react';
import axios from 'axios';

export default class Test extends Component {
  constructor(props){
    super(props);
    this.state={
      planets: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/planets/')
    .then((response) => {
      console.log(response.data.results)
      this.setState({ planets: response.data.results })
    })
    .catch(error => console.log(error));
  }

  render(){
    const planetItem = this.state.planets.map((planet,index) => {
      return (
        <p key={index}>{planet.name} has a population of {planet.population}</p>
      )
    })
    return (
      <div>
        {planetItem}
      </div>
    )
  }
}
