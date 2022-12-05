import React from "react";

export default class Sidebar extends React.Component {
  render() {
    let address = this.props.address;
    let phone = this.props.phone;
    let website = this.props.website;

    return (
      <div>
        <p className='sidebar-headers'>Address</p>
        <p className='sidebar-text'>{address}</p>
        <p className="sidebar-headers">Phone Number</p>
        <p className='sidebar-text'>{phone}</p>
        <p className="sidebar-headers">Website</p>
        <p className='sidebar-text'>{website}</p>
        <p className="sidebar-headers"></p>
      </div>
    );
  }
}
