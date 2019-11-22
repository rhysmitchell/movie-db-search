import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './components/nav/home';
import Movies from './components/nav/movies';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <Link to={"/"} className="nav-link">Home</Link>
            <Link to={"/movies"} className="nav-link">Movies</Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;