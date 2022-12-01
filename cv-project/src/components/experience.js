import React from "react";
import Input from "./input-field";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <div
          style={{
            display: "flex",
            gap: "10px",
            borderBottom: "1px solid gray",
            alignItems: "center",
          }}
        >
          <p className="resume-headers" style={{ marginRight: "auto" }}>
            Experience
          </p>
          <button
            className="edit-button"
            style={{ height: "1.5rem" }}
          >
            Edit{" "}
          </button>
          <button className="delete-button" 
            onClick={this.props.handleDeleteExperience} style={{ height: "1.5rem" }}>
            Delete
          </button>
        </div>
        <div className="resume-split">
          <div className="split-left">
            <p className="exp-dates">
              {this.props.info.dateStart} - {this.props.info.dateEnd}
            </p>
            <div className="exp-container" style={{ padding: ".5rem" }}>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {this.props.info.jobTitle}
              </p>
              <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                {this.props.info.company}
              </p>
              <p>{this.props.info.jobDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
