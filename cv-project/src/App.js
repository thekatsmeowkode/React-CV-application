import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";
import Input from "./components/input-field";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  onSubmitCV = (event) => {
    event.preventDefault();
    this.setState({ fullName: "", lastName: "", title: "" });
  };

  render() {
    return (
      <div className="App">
        <div className="header">CV Creator</div>
        <div className="left-side">
          <form onSubmit={this.onSubmitCV}>
            <div className="grid-fields"></div>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              onChange={this.handleChange}
              value={this.state.fullName}
              placeholder="Full Name"
            />
            <Input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Title"
            />
            <Input
              type="text"
              id="address"
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
              placeholder="Address"
            />
            <button>Generate CV</button>
          </form>
        </div>
        <div className="right-side">
          <PersonalInfo
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            objy={this.state}
            key="personal-info"
          />
        </div>
      </div>
    );
  }
}
