import React from "react";

export default class Header extends React.Component {
  render() {
    let fullName = this.props.fullName;
    let title = this.props.title;
    let address = this.props.address;
    let phone = this.props.phone;
    let website = this.props.website;
    let description = this.props.description;

    return (
      <div className="resume-header" >
        <h3 className="fullName-render">{fullName}</h3>
        <h6>{title}</h6>
      </div>
    );
  }
}
