import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../utils';

export const useRequestUpdateTask = () => {
	const refreshTasks = useSelector((state) => state.refreshTasks);
	const dispatch = useDispatch();
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
				dispatch({ type: 'REFRESH_TASK', payload: !refreshTasks });
			});
	};

	return {
		requestUpdateTask,
	};
};
