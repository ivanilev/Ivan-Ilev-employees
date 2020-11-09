import { UPDATE_LONGEST_EMPLOYEE_PAIR } from '../constants/ActionTypes';

export default function longestEmployeePair(state = {}, action) {
	switch (action.type) {
		/* testing purposes; TBD */
		case UPDATE_LONGEST_EMPLOYEE_PAIR:
			return {
				emp1Id: action.payload.emp1Id,
				emp2Id: action.payload.emp2Id,
				projId: action.payload.projId,
				days: action.payload.days
			};
		default:
			return state;
	}
}