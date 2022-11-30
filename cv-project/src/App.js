import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]:value})
  };

  onSubmitCV = (event) => {
    event.preventDefault();
    this.setState({ firstName: "", lastName: "" });
  };

  render() {
    return (
      <div className="App">
        <div className="header">CV Creator</div>
        <div className="left-side">
          <form onSubmit={this.onSubmitCV}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              placeholder="First Name"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              placeholder="Last Name"
            />
            <button>Generate CV</button>
          </form>
        </div>
        <div className="right-side">
          <PersonalInfo firstName={this.state.firstName} 
          lastName={this.state.lastName}
          objy={this.state}
          key="personal-info" />
        </div>
      </div>
    );
  }
}
