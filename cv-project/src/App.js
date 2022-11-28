import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import PersonalInfo from "./components/personal-info";

class App extends Component {
  constructor() {
    super();

    this.state = {
      item: {firstName: '', lastName: ''}
    };
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({...this.state, [name]: value});
  };

  onSubmitCV = (event) => {
    event.preventDefault();
    this.setState({
      // items: this.state.items.concat(this.state.item),
      item: {firstName: '', lastName: '', }
    })
  }

  render() {
    const { item } = this.state;

    return (
      <div className="App">
        <div className="header">CV Creator</div>
        <div className="left-side">
          <form onSubmit={this.onSubmitCV}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => this.handleChange(e)}
              value={this.state.firstName}
              placeholder="First Name"
            />
            <input
              type='text'
              id='lastName'
              name='lastName'
              onChange={(e) => this.handleChange(e)}
              value={this.state.lastName}
              placeholder="Last Name"
            />
          <button>Generate CV</button>
          </form>
        </div>
        <div className="right-side">
          <PersonalInfo thingy={item} key='personal-info'/>
        </div>

      </div>
    );
  }
}

export default App;
