import React, { Component } from 'react';

class DataGrid extends Component {
  render() {
    return (
			<div className="container main-grid">
				<div className="row text-center font-weight-bold">
					<div className="col">
						Emp1 ID
					</div>
					<div className="col">
						Emp2 ID
					</div>
					<div className="col">
						Proj ID
					</div>
					<div className="col">
						Days Together
					</div>
				</div>
				<div className="row text-center">
					<div className="col">
						{this.props.data.emp1Id}
					</div>
					<div className="col">
						{this.props.data.emp2Id}
					</div>
					<div className="col">
						{this.props.data.projId}
					</div>
					<div className="col">
						{this.props.data.days}
					</div>
				</div>
			</div>
    )
  }
}

export default DataGrid
