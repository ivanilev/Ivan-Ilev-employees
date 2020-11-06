
import { connect } from 'react-redux'
import { AddProject, AddEmployee} from '../actions'
import FileInput from '../components/FileInput'

const mapDispatchToProps = (dispatch) => ({
  AddProject: (id) => dispatch(AddProject(id)),
	AddEmployee: (payload) => {
    dispatch(AddEmployee(payload))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(FileInput)
