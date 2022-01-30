import CartStackNavigation from './cart/cartNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import OrdersStackNavigation from './ordersN/ordersNavigation';
import React from 'react';
import ShopStackNavigation from './shop/shop';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; /* Se importa el tab, de la libreria previamente instalada*/

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Inicicializar y que se ejecute el Stack, por lo que lo declaramos en una constante, tener en cuenta que puede tener cualquier nombre, no solo stack*/
const BottonTab = createBottomTabNavigator();

/* Declarando el componente */
const AppNavigation = () => {
	return (
		<NavigationContainer>
			{/* El initialRouter='' es la ruta inicial que nosotros escojamos, por ende que muestre primero los productos NO el carrito*/}
			<BottonTab.Navigator
				initialRouteName="shop"
				screenOptions={{
					headerShown: false /* Quita el Header que me sobra*/,
					tabBarShowLabel: false /* Quita el texto de los iconos que se crearon (shop / cart)*/,
					tabBarStyle: styles.tabBar /* nos permite añadir un style*/,
				}}
			>
				{/*ScreenOption nos permite hacer cambios en el visuarl de la pantalla, como quitar la cabecera que viene por defecto en el BottonTab */}
				<BottonTab.Screen
					name="Shop"
					component={ShopStackNavigation}
					options={{
						tabBarIcon: ({ focused }) => (
							<Ionicons name="home-outline" size={20} color={'black'} />
						),
					}}
				/>
				<BottonTab.Screen
					name="Cart"
					component={CartStackNavigation}
					options={{
						/* Focuse sirve para saber cuando nos encontramos en una vista en particular */
						tabBarIcon: ({ focused }) => (
							<Ionicons name="cart-outline" size={20} color={'black'} />
						),
					}}
				/>
				<BottonTab.Screen
					name="Orders"
					component={OrdersStackNavigation}
					options={{
						tabBarIcon: () => (
							<Ionicons
								name="reorder-three-outline"
								size={20}
								color={'black'}
							/>
						),
					}}
				/>
			</BottonTab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		elevation: 7,
		position: 'absolute',
		bottom: 10,
		left: 20,
		right: 20,
		borderRadius: 17,
		height: 92,
	},
});

export default AppNavigation;
