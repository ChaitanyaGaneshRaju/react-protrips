import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  loadTotalTrips = () => {
    return (
      <p className="text">
        {this.props.tripsArray.length} <sub>trip(s)</sub>
      </p>
    );
  };

  displayClub = () => {
    const clubs = this.props.tripsArray.filter((trip) => {
      return trip[2] === "club";
    });
    return (
      <p className="text">
        {clubs.length}
        <sub>
          <i className="fas fa-sun"></i>
        </sub>
      </p>
    );
  };

  displayTrek = () => {
    const treks = this.props.tripsArray.filter((trip) => {
      return trip[2] === "trek";
    });
    return (
      <p className="text">
        {treks.length}
        <sub>
          <i className="fas fa-mountain"></i>
        </sub>
      </p>
    );
  };

  displayTropic = () => {
    const trops = this.props.tripsArray.filter((trip) => {
      return trip[2] === "tropic";
    });
    return (
      <p className="text">
        {trops.length}
        <sub>
          <i className="fas fa-trophy"></i>
        </sub>
      </p>
    );
  };
  render() {
    return (
      <div id="home">
        <div id="total-trips">{this.loadTotalTrips()}</div>
        <div id="individual-trips">
          {this.displayClub()}
          {this.displayTrek()}
          {this.displayTropic()}
        </div>
      </div>
    );
  }
}

export default Home;
