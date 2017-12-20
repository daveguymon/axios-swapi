import React, { Component } from 'react';
import axios from 'axios';
import './../style.css';
import { Link } from 'react-router-dom';

export default class PlanetShow extends Component {
  constructor(props){
    super(props);
    this.state={
      planet: {}
    }
  }

  componentDidMount() {
    const { index } = this.props.match.params;
    axios.get(`https://swapi.co/api/planets/${index}/`)
    .then(response => {
      console.log(response);
      this.setState({ planet: response.data})
    })
    .catch(error => console.log(error));
  }

  render(){

    const { planet } = this.state;

    return (
      <div>
      <Link to="/">
        <p>Back to Planet Index</p>
      </Link>
      <table>
        <tbody>
          <tr>
            <th><h1>{planet.name}</h1></th>
          </tr>
          <tr>
            <td><p>Diameter: </p></td>
            <td><p>{planet.diameter} miles</p></td>
          </tr>
          <tr>
            <td><p>Climate: </p></td>
            <td><p>{planet.climate}</p></td>
          </tr>
          <tr>
            <td><p>Terrain: </p></td>
            <td><p>{planet.terrain}</p></td>
          </tr>
          <tr>
            <td><p>Orbital Period: </p></td>
            <td><p>{planet.orbital_period} days</p></td>
          </tr>
          <tr>
            <td><p>Rotational Period: </p></td>
            <td><p>{planet.rotation_period} hours</p></td>
          </tr>
          <tr>
            <td><p>Gravity: </p></td>
            <td><p>{planet.gravity}</p></td>
          </tr>
          <tr>
            <td><p>Surface Water: </p></td>
            <td><p>{planet.surface_water}</p></td>
          </tr>
          <tr>
            <td><p>Population: </p></td>
            <td><p>{planet.population}</p></td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
