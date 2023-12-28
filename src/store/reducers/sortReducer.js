export const initialSortAscState = false;

export const sortReducer = (state = initialSortAscState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'IS_SORT':
			return payload;
		default:
			return state;
	}
};
