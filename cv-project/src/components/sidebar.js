import React from "react";

export default function Sidebar(props) {
  let address = props.address;
  let phone = props.phone;
  let website = props.website;

  return (
    <div>
      <p className="sidebar-headers">Address</p>
      <p className="sidebar-text">{address}</p>
      <p className="sidebar-headers">Phone Number</p>
      <p className="sidebar-text">{phone}</p>
      <p className="sidebar-headers">Website</p>
      <p className="sidebar-text">{website}</p>
      <p className="sidebar-headers"></p>
    </div>
  );
}
