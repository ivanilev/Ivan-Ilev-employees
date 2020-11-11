import store from '../store';
import { parseISO, getOverlappingDaysInIntervals } from 'date-fns';
import { UpdateLongestEmployeePair } from '../actions';

function formatDate(d = new Date(Date.now())) {
	let month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

	if (month.length < 2) 
			month = '0' + month;
	if (day.length < 2) 
			day = '0' + day;

	return [year, month, day].join('-');
}

export default function StartProcess() {
	const currentState = store.getState();
	const employees = currentState.employees;

	let longestEmployeePairDays = 0;
	let result;

	for (let i = 0; i < employees.length; i++ ) {
		for (let j = i + 1; j < employees.length; j++ ) {
			let employee2SharedExperience = [];
			let employee1SharedExperience = employees[i].workHistory.filter(project => {
				let employee2SharedProject = employees[j].workHistory.find(p2 => project.projectId === p2.projectId);
				if (employee2SharedProject) {
					employee2SharedExperience.push(employee2SharedProject);
				}
				return employees[j].workHistory.some(p2 => project.projectId === p2.projectId);
			})

			let daysTogether = 0;

			for (let k = 0; k < employee1SharedExperience.length; k++) {

				const emp1DateRange = {
					start: parseISO(employee1SharedExperience[k].dateFrom),
					end: employee1SharedExperience[k].dateTo === 'NULL' ? parseISO(formatDate()) : parseISO(employee1SharedExperience[k].dateTo)
				}
				const emp2DateRange = {
					start: parseISO(employee2SharedExperience[k].dateFrom),
					end: employee2SharedExperience[k].dateTo === 'NULL' ? parseISO(formatDate()) : parseISO(employee2SharedExperience[k].dateTo)
				}

				daysTogether += getOverlappingDaysInIntervals( emp1DateRange, emp2DateRange );
			}
			if (daysTogether > longestEmployeePairDays) {
				longestEmployeePairDays = daysTogether;
				let sharedProjects = [];
				employee1SharedExperience.forEach(project => {
					// Only add the project if it doesn't exist
					if(sharedProjects.indexOf(project.projectId) === -1) {
						sharedProjects.push(project.projectId);
					}
				});
				result = {
					emp1Id: employees[i].employeeId,
					emp2Id: employees[j].employeeId,
					projId: sharedProjects,
					days: daysTogether
				}
			}
		}
	}
	console.table(result);
	store.dispatch(UpdateLongestEmployeePair(result));
}