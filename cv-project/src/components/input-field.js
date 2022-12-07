import React from "react";

export default function Input(props) {
  return (
    <div className="input-field-container">
      <label className="input-label" htmlFor={props.name}>
        {props.placeholder}
      </label>
      <input
        className="input-field"
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
}
