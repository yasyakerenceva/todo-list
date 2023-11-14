import { useEffect, useState } from 'react';

export const useRequestGetTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTasks) => {
				setTasks(loadedTasks);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return {
		isLoading,
		tasks,
	};
};
