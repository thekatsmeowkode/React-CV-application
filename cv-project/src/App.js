import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Input from "./components/input-field";
import Sidebar from "./components/sidebar";
import Experience from "./components/experience";
import Education from "./components/education";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

library.add(faPenToSquare, faTrashCan);

export default function App() {
  const [personalState, setPersonalState] = useState({
    fullName: "",
    address: "",
    title: "",
    website: "",
    description: "",
    phone: "",
  });

  const [experienceState, setExperienceState] = useState({
    id: idGenerator(),
    dateStart: "",
    dateEnd: "",
    jobTitle: "",
    company: "",
    jobDescription: "",
  });

  const [allExperiences, setAllExperiences] = useState([]);

  const [educationState, setEducationState] = useState({
    id: idGenerator(),
    eduStart: "",
    eduEnd: "",
    schoolName: "",
    major: "",
    eduLocation: "",
    eduNotes: "",
  });

  const [allEducation, setAllEducation] = useState([]);

  function handleChange(event) {
    setPersonalState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function idGenerator() {
    return uniqid();
  }

  function handleChangeExp(event) {
    setExperienceState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleChangeEdu(event) {
    setEducationState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleAddExperience(e, data) {
    e.preventDefault();
    setAllExperiences((current) => [...current, experienceState]);
    setExperienceState({
      id: idGenerator(),
      dateStart: "",
      dateEnd: "",
      jobTitle: "",
      company: "",
      jobDescription: "",
    });
  }

  function handleAddEducation(e, data) {
    e.preventDefault();
    setAllEducation((current) => [...current, educationState]);
    setEducationState({
      id: idGenerator(),
      eduStart: "",
      eduEnd: "",
      schoolName: "",
      major: "",
      eduLocation: "",
      eduNotes: "",
    });
  }

  function handleDeleteExperience(event) {
    let targetId = event.target.id;
    let identifier =
      targetId === "" ? event.currentTarget.parentElement.id : event.target.id;
    setAllExperiences((prevState) => {
      const arr = prevState.filter((item) => item.id !== identifier);
      return arr;
    });
  }

  function handleDeleteEducation(event) {
    let targetId = event.target.id;
    let identifier =
      targetId === "" ? event.currentTarget.parentElement.id : event.target.id;
    setAllEducation((prevState) => {
      const arr = prevState.filter((item) => item.id !== identifier);
      return arr;
    });
  }

  function handleEditExperience(event) {
    //fix for if user clicks on the FA icon instead of the button
    let targetId = event.target.id;
    let identifier =
      targetId === "" ? event.currentTarget.parentElement.id : event.target.id;
    let itemToEdit = allExperiences.find((obj) => {return obj.id === identifier});
    setExperienceState((prevState) => ({
      id: itemToEdit.id,
      dateStart: itemToEdit.dateStart,
      dateEnd: itemToEdit.dateEnd,
      jobTitle: itemToEdit.jobTitle,
      company: itemToEdit.company,
      jobDescription: itemToEdit.jobDescription,
    }));
    const newItems = allExperiences.filter(function (item) {
      return item.id !== identifier;
    });
    setAllExperiences(newItems);
  }

  function handleEditEducation(event) {
    let targetId = event.target.id;
    let identifier =
      targetId === "" ? event.currentTarget.parentElement.id : event.target.id;
    let itemToEdit = allEducation.find((obj) => obj.id === identifier);
    setEducationState({
      eduStart: itemToEdit.eduStart,
      eduEnd: itemToEdit.eduEnd,
      schoolName: itemToEdit.schoolName,
      major: itemToEdit.major,
      eduLocation: itemToEdit.eduLocation,
      eduNotes: itemToEdit.eduNotes,
    });
    const newItems = allEducation.filter(function (item) {
      return item.id !== identifier;
    });
    setAllEducation(newItems);
  }

  return (
    <div className="App">
      <div className="header">CV Creator</div>
      <div className="left-side">
        <form>
          <div className="body-headers">Personal Information</div>
          <div className="grid-fields">
            <Input
              type="text"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={personalState.fullName}
              placeholder="Full Name"
            />
            <Input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={personalState.title}
              placeholder="Title"
            />
            <Input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              value={personalState.address}
              placeholder="Address"
            />
            <Input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={personalState.phone}
              placeholder="Phone"
            />
            <Input
              type="text"
              id="website"
              name="website"
              onChange={handleChange}
              value={personalState.website}
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
                onChange={handleChange}
                value={personalState.description}
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
                onChange={handleChangeExp}
                value={experienceState.dateStart}
                placeholder="Date Started"
              />
              <Input
                type="text"
                id="dateEnd"
                name="dateEnd"
                onChange={handleChangeExp}
                value={experienceState.dateEnd}
                placeholder="Date Ended"
              />
              <Input
                type="text"
                id="jobTitle"
                name="jobTitle"
                onChange={handleChangeExp}
                value={experienceState.jobTitle}
                placeholder="Job Title"
              />
              <Input
                type="text"
                id="company"
                name="company"
                onChange={handleChangeExp}
                value={experienceState.company}
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
                  onChange={handleChangeExp}
                  value={experienceState.jobDescription}
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
              onClick={handleAddExperience}
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
                onChange={handleChangeEdu}
                value={educationState.eduStart}
                placeholder="Date Started"
              />
              <Input
                type="text"
                id="eduEnd"
                name="eduEnd"
                onChange={handleChangeEdu}
                value={educationState.eduEnd}
                placeholder="Date Ended"
              />
              <Input
                type="text"
                id="schoolName"
                name="schoolName"
                onChange={handleChangeEdu}
                value={educationState.schoolName}
                placeholder="School Name"
              />
              <Input
                type="text"
                id="eduLocation"
                name="eduLocation"
                onChange={handleChangeEdu}
                value={educationState.eduLocation}
                placeholder="Location"
              />
              <Input
                type="text"
                id="major"
                name="major"
                onChange={handleChangeEdu}
                value={educationState.major}
                placeholder="Major / Minor"
              />
              <Input
                type="text"
                id="eduNotes"
                name="eduNotes"
                onChange={handleChangeEdu}
                value={educationState.eduNotes}
                placeholder="Notes"
              />
            </div>
            <button
              style={{
                height: "2rem",
                width: "100%",
                padding: ".5rem",
                margin: ".5rem",
              }}
              onClick={handleAddEducation}
            >
              Add Education
            </button>
          </div>
        </form>
      </div>
      <div className="right-side">
        <div className="resume">
          <Header
            fullName={personalState.fullName}
            title={personalState.title}
          />
          <div className="body">
            <div className="resume-details">
              <p className="description">{personalState.description}</p>
              <p className="resume-headers" style={{ marginRight: "auto" }}>
                Experience
              </p>
              {useEffect(() => console.log("hello"), [allExperiences])}
              {allExperiences.map((item) => (
                <Experience
                  handleDeleteExperience={handleDeleteExperience}
                  handleChange={handleChangeExp}
                  handleEditExperience={handleEditExperience}
                  key={item.dateStart}
                  info={item}
                />
              ))}
              <p className="resume-headers" style={{ marginRight: "auto" }}>
                Education
              </p>
              {allEducation.map((item) => (
                <Education
                  handleDeleteEducation={handleDeleteEducation}
                  handleChange={handleChangeEdu}
                  handleEditEducation={handleEditEducation}
                  key={item.eduStart}
                  info={item}
                />
              ))}
            </div>
            <Sidebar
              className="sidebar"
              address={personalState.address}
              phone={personalState.phone}
              website={personalState.website}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
