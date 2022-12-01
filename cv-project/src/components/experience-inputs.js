import React from 'react'
import Input from './input-field'

export default class ExperienceInputs extends React.Component {

render() {
return (<div className="experience-inputs">
              <div className="grid-fields">
                <Input
                  type="text"
                  id="dateStart"
                  name="dateStart"
                  onChange={this.props.handleChangeExperience}
                  value={this.props.dateStart}
                  placeholder="Date Started"
                />
                <Input
                  type="text"
                  id="dateEnd"
                  name="dateEnd"
                  onChange={this.props.handleChangeExperience}
                  value={this.props.dateEnd}
                  placeholder="Date Ended"
                />
                <Input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  onChange={this.handleChangeExperience}
                  value={this.props.jobTitle}
                  placeholder="Job Title"
                />
                <Input
                  type="text"
                  id="company"
                  name="company"
                  onChange={this.handleChangeExperience}
                  value={this.props.company}
                  placeholder="Company Name / Location"
                />
                <div className="input-field-container">
                  <label htmlFor="jobDescription" className="input-label">
                    Job Description
                  </label>
                  <textarea
                    className="input-field"
                    type="textarea"
                    id="jobDescription"
                    name="jobDescription"
                    onChange={this.handleChangeExperience}
                    value={this.props.jobDescription}
                    placeholder="jobDescription"
                  ></textarea>
                </div>
              </div>
              <button style={{height:'2rem', width: '100%', padding: '.5rem', margin: '.5rem'}} onClick={this.handleAddExperience}>Add Experience</button>
              </div>
)
}
              }