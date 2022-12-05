import React from "react";

export default function Header(props) {
  
    let fullName = props.fullName;
    let title = props.title;

    return (
      <div className="resume-header" >
        <h3 className="fullName-render">{fullName}</h3>
        <h6>{title}</h6>
      </div>
    );
}
