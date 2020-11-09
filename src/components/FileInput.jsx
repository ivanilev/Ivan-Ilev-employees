import React, { Component } from 'react';
import StartProcess from '../utilities/algorithm'

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

      StartProcess()
    };
    reader.readAsText(e.target.files[0])

  }

  render() {
    return (
      <div className='mx-auto'>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="fileInput" onChange={(e) => this.logFile(e)} />
            <label className="custom-file-label" htmlFor="fileInput">Choose file</label>
          </div>
        </div>
      </div>
    )
  }
}

export default FileInput