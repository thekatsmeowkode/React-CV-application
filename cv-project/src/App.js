import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import Header from "./components/header";
import Input from "./components/input-field";
import Sidebar from "./components/sidebar";
import Experience from "./components/experience";

export default class App extends Component {
  state = {
    personalInfo: {
      fullName: "",
      address: "",
      title: "",
      website: "",
      description: "",
      phone: "",
    },
    experiences: [{ dateStart: "", dateEnd: "", jobTitle: "", company: "" }],
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState((prevState) => ({
      personalInfo: { ...prevState.personalInfo, [name]: value },
      ...prevState.experiences,
    }));
  };

  handleAddExperience = () => {
    this.setState((prevState) => ({
      ...prevState.personalInfo,
      experience: [
        ...prevState.experience,
        { dateStart: "", dateEnd: "", jobTitle: "", company: "" },
      ],
    }));
  };

  // onSubmitCV = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     fullName: "",
  //     address: "",
  //     title: "",
  //     website: "",
  //     description: "",
  //     phone: "",
  //     dateStart: "",
  //     dateEnd: "",
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div className="header">CV Creator</div>
        <div className="left-side">
          <form onSubmit={this.onSubmitCV}>
            <div className="body-headers">Personal Information</div>
            <div className="grid-fields">
              <Input
                type="text"
                name="fullName"
                id="fullName"
                onChange={this.handleChange}
                value={this.state.personalInfo.fullName}
                placeholder="Full Name"
              />
              <Input
                type="text"
                id="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.personalInfo.title}
                placeholder="Title"
              />
              <Input
                type="text"
                id="address"
                name="address"
                onChange={this.handleChange}
                value={this.state.personalInfo.address}
                placeholder="Address"
              />
              <Input
                type="text"
                id="phone"
                name="phone"
                onChange={this.handleChange}
                value={this.state.personalInfo.phone}
                placeholder="Phone"
              />
              <Input
                type="text"
                id="website"
                name="website"
                onChange={this.handleChange}
                value={this.state.personalInfo.website}
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
                  value={this.state.personalInfo.description}
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="body-headers">Experience</div>
            <div className="experience-inputs">
              <div className="grid-fields">
                <Input
                  type="text"
                  id="dateStart"
                  name="dateStart"
                  onChange={this.handleChange}
                  value={this.state.experiences.dateStart}
                  placeholder="Date Started"
                />
                <Input
                  type="text"
                  id="dateEnd"
                  name="dateEnd"
                  onChange={this.handleChange}
                  value={this.state.experiences.dateEnd}
                  placeholder="Date Ended"
                />
                <Input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  onChange={this.handleChange}
                  value={this.state.experiences.jobTitle}
                  placeHolder="Job Title"
                />
                <Input
                  type="text"
                  id="company"
                  name="company"
                  onChange={this.handleChange}
                  value={this.state.experiences.company}
                  placeHolder="Company Name"
                />
              </div>
            </div>

            <button>Generate CV</button>
          </form>
        </div>
        <div className="right-side">
          <div className="resume">
            <Header
              fullName={this.state.personalInfo.fullName}
              title={this.state.personalInfo.title}
            />
            <div className="body">
              <div className="resume-details">
                <p className="description">
                  {this.state.personalInfo.description}
                </p>
                <p className="body-headers">Experience</p>
              </div>
              <Sidebar
                className="sidebar"
                address={this.state.personalInfo.address}
                phone={this.state.personalInfo.phone}
                website={this.state.personalInfo.website}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
