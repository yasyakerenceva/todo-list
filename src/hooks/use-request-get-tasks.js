import { useEffect, useState } from 'react';
import { SERVER_URL, getParamsUrl } from '../utils';

export const useRequestGetTasks = (refreshTasks, isSortAsc, search) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${SERVER_URL}${getParamsUrl(isSortAsc, search)}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTasks) => {
				setTasks(loadedTasks);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTasks, isSortAsc, search]);

	return {
		isLoading,
		tasks,
	};
};
