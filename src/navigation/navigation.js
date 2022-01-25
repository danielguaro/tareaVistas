import { COLORS } from '../utils/constants/colors';
import Categories from '../screens/categories/categories';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import ProductDetail from '../screens/product-detail/productDetail';
import Products from '../screens/products/products';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Inicicializar y que se ejecute el Stack, por lo que lo declaramos en una constante, tener en cuenta que puede tener cualquier nombre, no solo stack*/
const Stack = createNativeStackNavigator();

/* Declarando el componente */
const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Categorias" /* Si quiero pasar estilos iguales para todas las pantallas y no tener que colocar los estilos en cada Stack.Screen, lo puedo hacer con un screenOptions ={{}}*/
				screenOptions={{
					headerTintColor: '#fff',
					headerTitleStyle: { fontWeight: 'bold' },
					headerStyle: {
						backgroundColor: Platform.OS === 'ios' ? COLORS.primary : '',
					},
				}}
			>
				{/*utilizado para poder incluir el árbol en el, dentro de este */}
				{/* Gestiona las vistas que vamos a utilizar*/}
				{/* Tener presente que el orden en que se coloquen los Stack.Screen implicará el orden de las vistas (por ende la primera, será la principal y así.
          Sin embargo, podemos indicar en el stack.navigator con cual iniciar con el initialRouterName=''*/}
				<Stack.Screen
					name="Categorias"
					component={Categories}
					options={{
						//Con options, puedo personalizar diversas cosas del header
						title: 'Home', // Lo que hace es cambiar el nombre por defecto q ReactN le pone.
						headerStyle: { backgroundColor: '#F07B3F' },
					}}
				/>
				{/* Encargada de darle nombre a la vista, al igual que indicar a q componente pertenece, en este caso, el componente lo importamos desde Categories*/}
				<Stack.Screen
					name="Products"
					component={Products}
					options={({ route }) => ({
						title: route.params.name,
						headerStyle: { backgroundColor: route.params.color },
					})}
				/>
				<Stack.Screen
					name="Product Detail"
					component={ProductDetail}
					options={({ route }) => ({
						title: route.params.name,
						headerStyle: { backgroundColor: '#3EC1D3' },
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;
