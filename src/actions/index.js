import * as types from '../constants/ActionTypes';

export const AddProject = id => ({type: types.ADD_PROJECT, id})
export const AddEmployee = payload => ({type: types.ADD_EMPLOYEE, payload})

