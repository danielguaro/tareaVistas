import { COLORS } from '../../utils/constants/colors';
import Orders from '../../screens/orders/ordersScreen';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Inicicializar y que se ejecute el Stack, por lo que lo declaramos en una constante, tener en cuenta que puede tener cualquier nombre, no solo stack*/
const Stack = createNativeStackNavigator();

/* Declarando el componente */
const OrdersStackNavigation = () => {
	return (
		<Stack.Navigator
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
				name="Orders"
				component={Orders}
				// options={{
				// 	//Con options, puedo personalizar diversas cosas del header
				// 	title: 'Home', // Lo que hace es cambiar el nombre por defecto q ReactN le pone.
				// 	headerStyle: { backgroundColor: '#F07B3F' },
				// }}
			/>
		</Stack.Navigator>
	);
};

export default OrdersStackNavigation;
