import React from "react";

export default class Body extends React.Component {
  render() {
    let address = this.props.address;
    let phone = this.props.phone;
    let website = this.props.website;
    let description = this.props.description;

    return (
      <div className="body" >
      </div>
    );
  }
}
