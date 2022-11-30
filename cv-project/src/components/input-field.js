import React from "react";

export default class Input extends React.Component {
    render() {
    
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor={this.props.name}>
          {this.props.placeholder}
        </label>
        <input
          className="input-field"
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
          placeholder={this.props.placeholder}
          {...this.props}
        />
      </div>
    );
  }
}
