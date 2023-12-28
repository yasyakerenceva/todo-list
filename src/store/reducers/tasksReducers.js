export const initialTasksState = [];

export const tasksReducers = (state = initialTasksState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOADED_TASKS':
			return [...payload];
		default:
			return state;
	}
};
