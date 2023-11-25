import { SERVER_URL } from '../utils';

export const useRequestUpdateTask = (refreshTasks, setRefreshTasks) => {
	const requestUpdateTask = (idTask, valueTask) => {
		fetch(`${SERVER_URL}/${idTask}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: idTask,
				title: valueTask,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				setRefreshTasks(!refreshTasks);
			});
	};

	return {
		requestUpdateTask,
	};
};
