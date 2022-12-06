import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Experience(props) {

  return (
    <div className="experience">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "-1.5rem",
          alignItems: 'flex-end',
          justifyContent: "center",
        }}
      >
        <button
          className="edit-button"
          id={props.info.id}
          onClick={props.handleEditExperience}
          style={{ height: "1.5rem", padding: '5px' }}
        >
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" aria-label="Edit experience" onClick={props.handleEditExperience}/>
        </button>
        <button
          className="delete-button"
          id={props.info.id}
          onClick={props.handleDeleteExperience}
          style={{ height: "1.5rem", padding: '5px'}}
        >
          <FontAwesomeIcon icon="fa-solid fa-trash-can" aria-label="Delete experience" onClick={props.handleEditEducation}/>
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
