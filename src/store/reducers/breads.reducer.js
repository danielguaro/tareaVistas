import { FILTER_BREADS, SELECT_BREAD } from '../actions/breads.action';

import { BREADS } from '../../utils/data/breads'; /* Importar la lista de objetos con la lista de categorias de panes */

const initialState = {
	breads: BREADS,
	filteredBread: [],
	selected: null,
};

const BreadReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_BREAD:
			return {
				...state,
				selected: state.breads.find((bread) => bread.id === action.breadId),
			};
		case FILTER_BREADS:
			return {
				...state,
				filteredBread: state.breads.filter(
					(bread) => bread.category === action.categoryId
				),
			};
		default:
			return state;
	}
};

export default BreadReducer;
