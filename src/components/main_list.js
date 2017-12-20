import React, { Component } from 'react';
import axios from 'axios';
import Planet from './planet';
import './../style.css';
import { Link } from 'react-router-dom';

export default class MainList extends Component {
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

  renderPlanetList() {
    return this.state.planets.map((planet,index) => {
      return <div key={index}>
          <Link to={`/planets/${planet.name}`}>
            <Planet planet={planet} />
          </Link>
        </div>
    })
  }

  render(){
    console.log(this.state.planets)
    return (
      <div className="main_list_container">
          {this.renderPlanetList()}
      </div>
    )
  }
}
