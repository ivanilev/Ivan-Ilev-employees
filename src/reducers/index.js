import { combineReducers } from 'redux'

import employees from './employees'
import projects from './projects'

const rootReducer = combineReducers({
	employees,
	projects
})

export default rootReducer
