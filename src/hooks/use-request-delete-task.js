import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../utils';

export const useRequestDeleteTask = () => {
	const refreshTasks = useSelector((state) => state.refreshTasks);
	const dispatch = useDispatch();
	const requestDeleteTask = (idTask) => {
		fetch(`${SERVER_URL}/${idTask}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				dispatch({ type: 'REFRESH_TASK', payload: !refreshTasks });
			});
	};

	return { requestDeleteTask };
};
