import CartStackNavigation from './cart/cartNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopStackNavigation from './shop/shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; /* Se importa el tab, de la libreria previamente instalada*/
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Inicicializar y que se ejecute el Stack, por lo que lo declaramos en una constante, tener en cuenta que puede tener cualquier nombre, no solo stack*/
const BottonTab = createBottomTabNavigator();

/* Declarando el componente */
const AppNavigation = () => {
	return (
		<NavigationContainer>
			{/* El initialRouter='' es la ruta inicial que nosotros escojamos, por ende que muestre primero los productos NO el carrito*/}
			<BottonTab.Navigator initialRouteName="shop">
				<BottonTab.Screen name="Shop" component={ShopStackNavigation} />
				<BottonTab.Screen name="Cart" component={CartStackNavigation} />
			</BottonTab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;
