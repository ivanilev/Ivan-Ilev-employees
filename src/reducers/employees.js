import { ADD_EMPLOYEE } from '../constants/ActionTypes';

export default function employees(state = [], action) {
	switch (action.type) {
		case ADD_EMPLOYEE:
			const employeeExists = state.some(employee => employee.employeeId === action.payload.id);
			if (!employeeExists) {
				return [
					...state,
					{
						employeeId: action.payload.id,
						workHistory: [
							{
								projectId: action.payload.projectId,
								dateFrom: action.payload.dateFrom,
								dateTo: action.payload.dateTo
							}
						]
					}
				]
			}
			return state.map(employee =>
        employee.employeeId === action.payload.id ? {
					...employee,
						workHistory: [{
							projectId: action.payload.projectId,
							dateFrom: action.payload.dateFrom,
							dateTo: action.payload.dateTo
						}, ...employee.workHistory]
				} : employee
			)
		default:
			return state
		}
}
