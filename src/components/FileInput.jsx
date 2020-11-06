import React, { Component } from 'react';

class FileInput extends Component {


  logFile = async (e) => {
    e.preventDefault()
		const reader = new FileReader()
    reader.onload = async (e) => {
			const resultLines = e.target.result.split(/\r?\n|\r/g).map((line) => {
				return line.split(', ');
			})
      resultLines.forEach(dataLine => {
        this.props.AddEmployee({
          id: dataLine[0],
          projectId: dataLine[1],
          dateFrom: dataLine[2],
          dateTo: dataLine[3]
        })
        this.props.AddProject(dataLine[1])
      });
    };
    reader.readAsText(e.target.files[0])
  }

  render() {
    return (
      <div>
        <input type="file" onChange={(e) => this.logFile(e)} />
      </div>
    )
  }
}

export default FileInput