export const initialSearchState = '';

export const searchReducer = (state = initialSearchState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SEARCH':
			return payload;
		default:
			return state;
	}
};
