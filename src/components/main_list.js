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
      console.log("Response data: ",response.data)
      this.setState({ planets: response.data.results })
    })
    .catch(error => console.log(error));
  }

  renderPlanetList() {
    return this.state.planets.map((planet,index) => {
      return <div key={index}>
          <Link to={`/planets/${index + 2}`}>
            <Planet planet={planet} />
          </Link>
        </div>
    })
  }

  render(){
    return (
      <div className="main_list_container">
          {this.renderPlanetList()}
      </div>
    )
  }
}
