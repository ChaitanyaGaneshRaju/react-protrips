import React, { Component } from "react";
import "./Trip.css";

class Trip extends Component {
  pushData = () => {
    this.props.update("hello");
  };
  addTrip = (e) => {
    e.preventDefault();
    //array to hold the values
    let array = [];

    //fetching the values
    let date = document.getElementById("date").value;
    let today = new Date().toISOString().slice(0, 10);

    //checking wether the date is greater than current date or not
    if (date >= today) {
      array.push(document.getElementById("date").value);
      array.push(document.getElementById("place").value);
      array.push(document.getElementById("type").value);

      //updating the array back to parent state
      this.props.update(array);
      alert("Trip has been added");
    } else {
      alert("Choose upcoming dates");
    }
  };
  render() {
    return (
      <div id="trip">
        <h1>Add Trip</h1>
        <form action="">
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" id="date" />

          <label htmlFor="place">Place:</label>
          <input type="text" name="place" id="place" />

          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="trek">Trek</option>
            <option value="tropic">Tropic</option>
            <option value="club">Club</option>
          </select>
          <input
            type="submit"
            value="Submit"
            onClick={(e) => this.addTrip(e)}
          />
        </form>
      </div>
    );
  }
}

export default Trip;
