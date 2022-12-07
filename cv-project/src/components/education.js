import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Education(props) {
  return (
    <div className="education">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "-1.5rem",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <button
          className="edit-button"
          style={{ height: "1.5rem", padding: "5px" }}
          id={props.info.id}
          onClick={props.handleEditEducation}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-pen-to-square"
            aria-label="Edit education item"
            onClick={props.handleEditEducation}
          />
        </button>
        <button
          className="delete-button"
          id={props.info.id}
          onClick={props.handleDeleteEducation}
          style={{ height: "1.5rem", padding: "5px" }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash-can"
            aria-label="Delete education item"
            onClick={props.handleDeleteEducation}
          />
        </button>
      </div>
      <div className="resume-split">
        <div className="split-left">
          <p className="exp-dates">
            {props.info.eduStart} - {props.info.eduEnd}
          </p>
          <div className="exp-container" style={{ padding: ".5rem" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {props.info.schoolName} {props.info.eduLocation}
            </p>
            <p style={{ fontStyle: "italic", fontSize: "16px" }}>
              {props.info.major}
            </p>
            <p>{props.info.eduNotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
