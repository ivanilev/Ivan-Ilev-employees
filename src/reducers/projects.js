import { ADD_PROJECT } from '../constants/ActionTypes';

export default function projects(state = [], action) {
  switch (action.type) {
    case ADD_PROJECT:
			const projectExists = state.some(project => project.id === action.id);
			if (projectExists) {
				return state;
			}
      return [
        ...state,
        {
          id: action.id
        }
      ]
    default:
      return state
  }
}
