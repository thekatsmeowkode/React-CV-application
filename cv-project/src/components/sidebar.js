import React from "react";

export default class Sidebar extends React.Component {
  render() {
    let address = this.props.address;
    let phone = this.props.phone;
    let website = this.props.website;
    let description = this.props.description;

    return (
      <div>
        <p className='sidebar-headers'>Address</p>
        <p>{address}</p>
      </div>
    );
  }
}
