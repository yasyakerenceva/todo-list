import { db } from '../firebase';
import { ref, push } from 'firebase/database';

export const useRequestPostTask = () => {
	const requestAddTask = (valueTask) => {
		const tasksDbRef = ref(db, 'tasks');

		push(tasksDbRef, {
			title: valueTask,
		});
	};

	return {
		requestAddTask,
	};
};
