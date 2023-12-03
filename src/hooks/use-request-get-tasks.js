import { useEffect, useState } from 'react';
import { SERVER_URL, getParamsUrl } from '../utils';

export const useRequestGetTasks = (refreshTasks, isSortAsc, search) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isFulfilled, setIsFulfilled] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${SERVER_URL}${getParamsUrl(isSortAsc, search)}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTasks) => {
				setTasks(loadedTasks);
				loadedTasks.length ? setIsFulfilled(true) : setIsFulfilled(false);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTasks, isSortAsc, search]);

	return {
		isLoading,
		isFulfilled,
		tasks,
	};
};
