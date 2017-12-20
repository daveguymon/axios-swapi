import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlanetShow from './components/planet_show';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/planets/:index" component={PlanetShow} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
