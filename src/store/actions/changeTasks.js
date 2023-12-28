export const changeTasks = (loadedTask) => (dispatch) => {
	dispatch({
		type: 'LOADED_TASKS',
		payload: loadedTask,
	});
};
