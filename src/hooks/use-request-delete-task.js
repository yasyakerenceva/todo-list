import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTask = () => {
	const requestDeleteTask = (idTask) => {
		const taskDbRef = ref(db, `tasks/${idTask}`);

		remove(taskDbRef);
	};

	return { requestDeleteTask };
};
