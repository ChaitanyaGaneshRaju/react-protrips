import React, { Component } from "react";
import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "../Home/Home";
import Trip from "../Trip/Trip";
import List from "../List/List";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      trips: [],
    };
  }
  updateTrip = (tripArray) => {
    //holding the state trip array into temporary array
    let array = this.state.trips;

    //pushing the newly entered values from tripArray into the state trip
    array.push(tripArray);

    //updating the state
    this.setState({
      trips: array,
    });
  };
  render() {
    console.log(this.state.trips);
    return (
      <div id="side-bar">
        <Router>
          <nav id="nav-bar">
            <Link to="/home">
              <i className="fas fa-home"></i>
            </Link>
            <Link to="/trip">
            <i className="far fa-calendar-plus"></i>
            </Link>
            <Link to="/list">
              <i className="fas fa-th-list"></i>
            </Link>
          </nav>
          <Switch>
            <Route exact path="/home">
              <Home tripsArray={this.state.trips}/>
            </Route>
            <Route path="/trip">
              <Trip add={this.state.trips} update={this.updateTrip} />
            </Route>
            <Route path="/list">
              <List list={this.state.trips}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Sidebar;
