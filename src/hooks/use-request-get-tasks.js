import { useEffect, useState } from 'react';
import { SERVER_URL, getParamsUrl } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { changeTasks } from '../store/actions/index';
import { useDebounce } from './use-debounce';

export const useRequestGetTasks = () => {
	const refreshTasks = useSelector((state) => state.refreshTasks);
	const isSortAsc = useSelector((state) => state.isSortAsc);
	const search = useDebounce(
		useSelector((state) => state.search),
		250,
	);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [isFulfilled, setIsFulfilled] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${SERVER_URL}${getParamsUrl(isSortAsc, search)}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTasks) => {
				dispatch(changeTasks(loadedTasks));
				loadedTasks.length ? setIsFulfilled(true) : setIsFulfilled(false);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTasks, isSortAsc, search, dispatch]);

	return {
		isLoading,
		isFulfilled,
	};
};
