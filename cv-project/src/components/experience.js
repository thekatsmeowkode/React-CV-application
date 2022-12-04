import React from "react";
import Input from "./input-field";

export default function Experience(props) {
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
          <button className="delete-button" id={props.info.id}
            onClick={props.handleDeleteExperience} style={{ height: "1.5rem" }}>
            Delete
          </button>
        </div>
        <div className="resume-split">
          <div className="split-left">
            <p className="exp-dates">
              {props.info.dateStart} - {props.info.dateEnd}
            </p>
            <div className="exp-container" style={{ padding: ".5rem" }}>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {props.info.jobTitle}
              </p>
              <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                {props.info.company}
              </p>
              <p>{props.info.jobDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
