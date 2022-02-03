import { CATEGORIES } from '../../utils/data/categories'; /* Data de las categorías que necesitamos en este caso para setiarlo como valor inicial*/
import { SELECT_CATEGORY } from '../actions/category.action';

/* Setiamos un estado inicial para el REDUCTOR*/
const initialState = {
	/* Contendrá un objeto con los estados iniciales que yo quiero para este store*/
	categories:
		CATEGORIES /* Si viniera de un servicio, podría venir como nulo (objeto vacio)*/,
	selected: null,
};

const CategoryReducer = (state = initialState, action) => {
	/* Debemos evaluar el tipo de acción que estamos realizando, esto se hace por medio de un switch() */
	switch (action.type) {
		case SELECT_CATEGORY:
			const indexCategory = state.categories.findIndex(
				(category) => category.id === action.categoryID
			);
			if (indexCategory === -1) return state; /* Si no hay coincidencia*/
			return {
				...state,
				selected:
					state.categories[
						indexCategory
					] /* si hay concidencia, retorna el valor seleccionado*/,
			};
		default:
			return state;
	}
};

export default CategoryReducer;
