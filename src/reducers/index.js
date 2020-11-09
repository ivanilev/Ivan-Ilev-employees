import { combineReducers } from 'redux'

import employees from './employees'
import projects from './projects'
import longestEmployeePair from './longestEmployeePair'

const rootReducer = combineReducers({
	employees,
	projects,
	longestEmployeePair
})

export default rootReducer
