/* Vista para listar el carrito de compras */

import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { CART } from '../../utils/data/cart';
import CartItem from '../../components/cartItem/cartItem';
import React from 'react';

/* Declaración del componente*/
const Cart = () => {
	const items = CART;
	const total = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const handleConfirm = () => {
		console.warn('confirmado');
	};

	const handleDelete = (id) => {
		console.warn('Eliminar item', id);
	};

	const renderItems = (data) => (
		/* Para renderizar los valores de la importación CartItem*/
		<CartItem item={data.item} onDelete={handleDelete} />
	);
	return (
		<View style={styles.container}>
			<View style={styles.list}>
				<FlatList
					data={items}
					renderItem={renderItems}
					keyExtractor={(item) => item.id}
				/>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.confirm} onPress={() => handleConfirm}>
					<Text>Confirmar</Text>
					<View style={styles.total}>
						<Text style={styles.text}>Total:</Text>
						<Text style={styles.text}> $ {total}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
		paddingBottom: 120,
	},
	list: {
		flex: 1,
	},
	footer: {
		padding: 12,
		borderTopColor: '#ccc',
		borderTopWidth: 1,
	},
	confirm: {
		backgroundColor: '#4FBDBA',
		borderRadius: 10,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	total: {
		flexDirection: 'row',
	},
	text: {
		fontSize: 18,
		padding: 8,
		fontWeight: 'bold',
	},
});

export default Cart;
