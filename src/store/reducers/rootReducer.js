import { combineReducers } from 'redux';
import { tasksReducers } from './tasksReducers';
import { refreshTasksReducer } from './refreshTasksReducer';
import { sortReducer } from './sortReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
	tasks: tasksReducers,
	refreshTasks: refreshTasksReducer,
	isSortAsc: sortReducer,
	search: searchReducer,
});
