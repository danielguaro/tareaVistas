import { combineReducers, createStore } from 'redux';

import BreadReducer from './reducers/breads.reducer'; /* Importamos ambos reductores*/
import CategoryReducer from './reducers/category.reducer';

/* Para combinar los dos reducers, previamente creados e importados aquí*/
const RootReducer = combineReducers({
	categories: CategoryReducer,
	breads: BreadReducer,
});

/* La exportación aquí es diferente, ya que funciona como un high order component, esto lo que hace es envolver tdos los redusers, para que nuestra app los pueda consumir*/
export default createStore(RootReducer);
