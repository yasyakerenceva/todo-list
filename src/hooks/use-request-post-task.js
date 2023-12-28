import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../utils';

export const useRequestPostTask = () => {
	const refreshTasks = useSelector((state) => state.refreshTasks);
	const dispatch = useDispatch();
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
				dispatch({ type: 'REFRESH_TASK', payload: !refreshTasks });
			});
	};

	return {
		requestAddTask,
	};
};
