
import { connect } from 'react-redux'
import { AddEmployee } from '../actions'
import FileInput from '../components/FileInput'

const mapDispatchToProps = (dispatch) => ({
	AddEmployee: (payload) => {
    dispatch(AddEmployee(payload))
	},
})

export default connect(
  null,
  mapDispatchToProps
)(FileInput)
