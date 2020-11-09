import store from '../store';
import { parseISO, getOverlappingDaysInIntervals } from 'date-fns';
import { UpdateLongestEmployeePair } from '../actions';

function formatDate() {
	var d = new Date(Date.now()),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

	if (month.length < 2) 
			month = '0' + month;
	if (day.length < 2) 
			day = '0' + day;

	return [year, month, day].join('-');
}

function getEmployeePairDaysTogetherOnProject(emp1, emp2, projID) {
	const employee1ProjectExperience = emp1.workHistory.find(p => p.projectId === projID);
	const employee2ProjectExperience = emp2.workHistory.find(p => p.projectId === projID);


	const emp1DateRange = {
		start: employee1ProjectExperience.dateFrom === 'NULL' ? Date(Date.now()) : parseISO(employee1ProjectExperience.dateFrom),
		end: employee1ProjectExperience.dateTo === 'NULL' ? parseISO(formatDate()) : parseISO(employee1ProjectExperience.dateTo)
	}
	const emp2DateRange = {
		start: employee2ProjectExperience.dateFrom === 'NULL' ? Date(Date.now()) : parseISO(employee2ProjectExperience.dateFrom),
		end: employee2ProjectExperience.dateTo === 'NULL' ? parseISO(formatDate()) : parseISO(employee2ProjectExperience.dateTo)
	}


	let daysTogether = getOverlappingDaysInIntervals( emp1DateRange, emp2DateRange );
	return { 
		emp1Id: emp1.employeeId,
		emp2Id: emp2.employeeId,
		projId: projID,
		days: daysTogether
	}
}
export default function StartProcess() {
	const currentState = store.getState();
	const employees = currentState.employees;
	const projects = currentState.projects;

	let longestEmployeePairDays = 0; 
	projects.forEach(project => {

		const employeesInProject = employees.filter(emp => emp.workHistory.some(proj => proj.projectId === project.id))

		for (let i = 0; i < employeesInProject.length; i++ ) {
			for (let j = i + 1; j < employeesInProject.length; j++ ) {
				let result = getEmployeePairDaysTogetherOnProject(employeesInProject[i], employeesInProject[j], project.id)
				if (result.days > longestEmployeePairDays) {
					longestEmployeePairDays = result.days;
					store.dispatch(UpdateLongestEmployeePair(result));
					console.log('found a longer pair of employees: ', result)
				}
			}
		}
	});


}