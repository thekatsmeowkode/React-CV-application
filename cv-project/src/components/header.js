import React from "react";

export default class Header extends React.Component {
  render() {
    let fullName = this.props.fullName;
    let title = this.props.title;

    return (
      <div className="resume-header" >
        <h3 className="fullName-render">{fullName}</h3>
        <h6>{title}</h6>
      </div>
    );
  }
}
