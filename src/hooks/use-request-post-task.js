import { SERVER_URL } from '../utils';

export const useRequestPostTask = (refreshTasks, setRefreshTasks) => {
	const requestAddTask = (valueTask) => {
		fetch(SERVER_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: valueTask,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				setRefreshTasks(!refreshTasks);
			});
	};

	return {
		requestAddTask,
	};
};
