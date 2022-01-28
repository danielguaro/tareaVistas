/* Vista para listar el carrito de compras */

import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

/* Declaración del componente*/
const Cart = () => {
	return (
		<View style={styles.container}>
			<Text> Car</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Cart;
