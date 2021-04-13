//Opening page, click on x and will bring you to home page
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { Checklist } from './components/checklist';
import { Map } from './components/map';
import { Pedometer } from './components/pedometer';
import { Reviews } from './components/reviews';
import { Button } from 'react-bootstrap';//will allow user to switch component
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <p>
            🌊 Welcome to The Great Atlantic Way 🌊
        </p>
          <Button href="/map" variant="success" size="lg">Map </Button>
          <Button href="/checklist" variant="success" size="lg"> Checklist </Button>
          <Button href="/pedometer" variant="success" size="lg"> Pedometer </Button>
          <Button href="/reviews" variant="success" size="lg"> Reviews</Button>
          <br></br>
          <Switch>
            <Route path='/map' component={Map} exact />
            <Route path='/checklist' component={Checklist} exact />
            <Route path='/pedometer' component={Pedometer} exact />
            <Route path='/reviews' component={Reviews} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
