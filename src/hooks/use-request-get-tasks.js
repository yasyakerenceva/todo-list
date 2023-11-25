import { useEffect, useState } from 'react';
import { ref, onValue, query, orderByChild, startAt, endAt } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTasks = (isSortAsc, searchValue) => {
	const [tasks, setTasks] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let tasksDbRef = ref(db, 'tasks');

		if (isSortAsc) {
			tasksDbRef = query(ref(db, 'tasks'), orderByChild('title'));
		}

		if (searchValue.trim().length) {
			tasksDbRef = query(
				ref(db, 'tasks'),
				orderByChild('title'),
				startAt(searchValue),
				endAt(searchValue + '\uf8ff'),
			);
		}

		return onValue(tasksDbRef, (snapshot) => {
			const loadedTasks = {};
			snapshot.forEach((childSnapshot) => {
				const childKey = childSnapshot.key;
				const childData = childSnapshot.val();
				loadedTasks[childKey] = childData;
			});
			setTasks(loadedTasks);
			setIsLoading(false);
		});
	}, [isSortAsc, searchValue]);

	return {
		isLoading,
		tasks,
	};
};
