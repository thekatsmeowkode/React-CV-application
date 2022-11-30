import React from "react";

export default class PersonalInfo extends React.Component {
  render() {
    let firstName = this.props.firstName;
    let lastName = this.props.lastName;

    return (
      <p className="firstNameRender" key={this.props.firstName}>
        {firstName} {lastName}
        {Object.values(this.props.objy).forEach((each) => {console.log(each)})}
      </p>
    );
  }
}
