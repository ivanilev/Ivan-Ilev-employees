import { combineReducers } from 'redux'

import employees from './employees'
import longestEmployeePair from './longestEmployeePair'

const rootReducer = combineReducers({
	employees,
	longestEmployeePair
})

export default rootReducer
