import { SERVER_URL } from '../utils';

export const useRequestDeleteTask = (refreshTasks, setRefreshTasks) => {
	const requestDeleteTask = (idTask) => {
		fetch(`${SERVER_URL}/${idTask}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				setRefreshTasks(!refreshTasks);
			});
	};

	return { requestDeleteTask };
};
