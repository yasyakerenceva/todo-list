export const SERVER_URL = 'http://localhost:3005/tasks';

export const getParamsUrl = (isSort, searchValue) => {
	const params = new URLSearchParams();

	if (isSort) {
		params.set('_sort', 'title');
		params.set('order', 'asc');
	}

	if (searchValue.trim().length) {
		params.set('q', searchValue);
	}

	return '?' + params.toString();
};
