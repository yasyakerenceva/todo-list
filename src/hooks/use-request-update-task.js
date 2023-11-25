import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTask = () => {
	const requestUpdateTask = (idTask, valueTask) => {
		const taskDbRef = ref(db, `tasks/${idTask}`);

		set(taskDbRef, {
			title: valueTask,
		});
	};

	return {
		requestUpdateTask,
	};
};
