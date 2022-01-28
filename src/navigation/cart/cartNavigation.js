import { COLORS } from '../../utils/constants/colors';
import Cart from '../../screens/cart/cartScreen';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Inicicializar y que se ejecute el Stack, por lo que lo declaramos en una constante, tener en cuenta que puede tener cualquier nombre, no solo stack*/
const Stack = createNativeStackNavigator();

/* Declarando el componente */
const CartStackNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName="Cart" /* Si quiero pasar estilos iguales para todas las pantallas y no tener que colocar los estilos en cada Stack.Screen, lo puedo hacer con un screenOptions ={{}}*/
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
				name="Cart"
				component={Cart}
				// options={{
				// 	//Con options, puedo personalizar diversas cosas del header
				// 	title: 'Home', // Lo que hace es cambiar el nombre por defecto q ReactN le pone.
				// 	headerStyle: { backgroundColor: '#F07B3F' },
				// }}
			/>
		</Stack.Navigator>
	);
};

export default CartStackNavigation;
