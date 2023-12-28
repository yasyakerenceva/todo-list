export const initialRefreshTasksState = false;

export const refreshTasksReducer = (state = initialRefreshTasksState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'REFRESH_TASK':
			return payload;
		default:
			return state;
	}
};
