export const SELECT_CATEGORY = 'SELECT-CATEGORY';

export const selectCategory = (id) => ({
	type: SELECT_CATEGORY,
	categoryID: id,
});
