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
    experience:
      {
        id: '',
        dateStart: "",
        dateEnd: "",
        jobTitle: "",
        company: "",
        jobDescription: "",
      },
    experiences: [],
    education: [
      {
        eduStart: "",
        eduEnd: "",
        schoolName: "",
        major: "",
        eduLocation: "",
        eduNotes: "",
      },
    ],
  };

  handleChange = (event) => {
    this.setState((prevState) => ({
      personalInfo: { ...prevState.personalInfo, [event.target.name]: event.target.value }
    }));
  };

  handleChangeExp = (event => {
    this.setState((prevState) => ({
      experience: {...prevState.experience, [event.target.name]: event.target.value}
    }))
  })

  handleAddExperience = (e, data) => {
    e.preventDefault();
    this.state.experiences.push(data)
    this.setState({experience: {
      id: '',
      dateStart: "",
      dateEnd: "",
      jobTitle: "",
      company: "",
      jobDescription: ""
    }})
  }


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
                  onChange={this.handleChangeExp}
                  value={this.state.experience.dateStart}
                  placeholder="Date Started"
                />
                <Input
                  type="text"
                  id="dateEnd"
                  name="dateEnd"
                  onChange={this.handleChangeExp}
                  value={this.state.experience.dateEnd}
                  placeholder="Date Ended"
                />
                <Input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  onChange={this.handleChangeExp}
                  value={this.state.experience.jobTitle}
                  placeholder="Job Title"
                />
                <Input
                  type="text"
                  id="company"
                  name="company"
                  onChange={this.handleChangeExp}
                  value={this.state.experience.company}
                  placeholder="Company Name / Location"
                />
                <div className="input-field-container">
                  <label htmlFor="jobDescription" className="input-label">
                    Job Description
                  </label>
                  <textarea
                    className="input-field"
                    type="textarea"
                    id="jobDescription"
                    name="jobDescription"
                    onChange={this.handleChangeExp}
                    value={this.state.experience.jobDescription}
                    placeholder="jobDescription"
                  ></textarea>
                </div>
              </div>
              <button
                style={{
                  height: "2rem",
                  width: "100%",
                  padding: ".5rem",
                  margin: ".5rem",
                }}
                onClick={(e) => this.handleAddExperience(e, {
                  id: uniqid(),
                  dateStart: this.state.experience.dateStart,
                  dateEnd: this.state.experience.dateEnd,
                  jobTitle: this.state.experience.jobTitle,
                  company: this.state.experience.company,
                  jobDescription: this.state.experience.jobDescription,
                })}
              >
                Add Experience
              </button>
            </div>
            <div className="body-headers">Education</div>
            <div className="education-inputs">
              <div className="grid-fields">
                <Input
                  type="text"
                  id="eduStart"
                  name="eduStart"
                  onChange={this.handleChange}
                  value={this.state.education.eduStart}
                  placeholder="Date Started"
                />
                <Input
                  type="text"
                  id="eduEnd"
                  name="eduEnd"
                  onChange={this.handleChange}
                  value={this.state.education.eduEnd}
                  placeholder="Date Ended"
                />
                <Input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  onChange={this.handleChange}
                  value={this.state.education.schoolName}
                  placeholder="School Name"
                />
                <Input
                  type="text"
                  id="eduLocation"
                  name="eduLocation"
                  onChange={this.handleChange}
                  value={this.state.education.eduLocation}
                  placeholder="Location"
                />
                <Input
                  type="text"
                  id="major"
                  name="major"
                  onChange={this.handleChange}
                  value={this.state.education.major}
                  placeholder="Major / Minor"
                />
                <Input
                  type="text"
                  id="eduNotes"
                  name="eduNotes"
                  onChange={this.handleChange}
                  value={this.state.education.eduNotes}
                  placeholder="Notes"
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
                {this.state.experiences.map((item) => (
                  <Experience
                    handleDeleteExperience={this.handleDeleteExperience}
                    handleChange={this.handleChangeExp}
                    key={item.id}
                    info={item}
                    id={item.id}
                  />
                ))}
                {/* <Experience
                  dateStart={this.state.experiences[0].dateStart}
                  dateEnd={this.state.experiences[0].dateEnd}
                  jobTitle={this.state.experiences[0].jobTitle}
                  company={this.state.experiences[0].company}
                  jobDescription={this.state.experiences[0].jobDescription}
                /> */}
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
