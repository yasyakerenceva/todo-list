import { useEffect, useState } from 'react';
import { SERVER_URL } from '../utils';

export const useRequestGetTaskId = (idTask) => {
	const [task, setTask] = useState('');
	const [isFoundTask, setIsFoundTask] = useState(null);

	useEffect(() => {
		fetch(`${SERVER_URL}/${idTask}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTask) => {
				if (loadedTask.title) {
					setIsFoundTask(true);
					setTask(loadedTask);
				} else {
					setIsFoundTask(false);
				}
			});
	}, [idTask]);

	return {
		task,
		isFoundTask,
	};
};
