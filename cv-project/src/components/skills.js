import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills(props) {
  return (
    <div className="skills" style={{ display: "flex", alignItems: "baseline" }}>
      <div
        className="skill-button-container"
        style={{
          marginLeft: "-3rem",
        }}
      >
        <button
          className="edit-button"
          id={props.info.toString()}
          onClick={props.handleEditSkill}
          style={{ height: "1.5rem", padding: "5px" }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-pen-to-square"
            aria-label="Edit skill"
            onClick={props.handleEditSkill}
          />
        </button>
        <button
          className="delete-button"
          id={props.info.toString()}
          onClick={props.handleDeleteSkill}
          style={{ height: "1.5rem", padding: "5px" }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash-can"
            aria-label="Delete skill"
            onClick={props.handleDeleteSkill}
          />
        </button>
      </div>
      <div>
        <p
          style={{
            marginLeft: "1rem",
            marginBottom: ".75rem",
            fontSize: "14px",
          }}
        >
          - {props.info}
        </p>
      </div>
    </div>
  );
}
