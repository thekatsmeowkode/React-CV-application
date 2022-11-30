import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import Header from "./components/header";
import Input from "./components/input-field";
import Sidebar from "./components/sidebar";

export default class App extends Component {
  state = {
    fullName: "",
    address: "",
    title: "",
    website: "",
    description: "",
    phone: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  onSubmitCV = (event) => {
    event.preventDefault();
    this.setState({
      fullName: "",
      address: "",
      title: "",
      website: "",
      description: "",
      phone: "",
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">CV Creator</div>
        <div className="left-side">
          <form onSubmit={this.onSubmitCV}>
            <div className="grid-fields">
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
              <Input
                type="text"
                id="phone"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                placeholder="Phone"
              />
              <Input
                type="text"
                id="website"
                name="website"
                onChange={this.handleChange}
                value={this.state.website}
                placeholder="Website"
              />
              <div className="input-field-container">
                <label htmlFor="description" className="input-label">
                  Description
                </label>
                <textarea
                  className="input-field"
                  type="textarea"
                  id="description"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <button>Generate CV</button>
          </form>
        </div>
        <div className="right-side">
          <div className="resume">
            <Header
              fullName={this.state.fullName}
              title={this.state.title}
              description={this.state.description}
            />
            <div className="body">
              <div className="resume-details">
                <p className='description'>{this.state.description}</p>
                <p className='body-headers'>Experience</p>
              </div>
              <Sidebar
                className='sidebar'
                address={this.state.address}
                phone={this.state.phone}
                website={this.state.website}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
