import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <h1 className="font-weight-bold py-5 text-center"><i className="fas fa-edit pr-3"/>Skills</h1>
        <Table borderless>
          <tbody>
            <tr>
              <th className="text-right">Programming Languages</th>
              <td>JavaScript, Ruby</td>
              <th className="text-right">Markup</th>
              <td>HTML, CSS</td>
            </tr>
            <tr>
              <th className="text-right">Frontend Frameworks</th>
              <td>React, Angular</td>
              <th className="text-right">Databases</th>
              <td>PostgreSQL, MySQL, MongoDB</td>
            </tr>
            <tr>
              <th className="text-right">Backend Frameworks</th>
              <td>Node.JS, Ruby on Rails</td>
              <th className="text-right">Tools</th>
              <td>Git, Jenkins, Docker, JIRA, Photoshop</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Skills;