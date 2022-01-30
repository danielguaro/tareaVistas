/* Vista para listar el carrito de compras */

import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { ORDERS } from '../../utils/data/orders';
import OrderItem from '../../components/orderItem/orderItem';
import React from 'react';

/* Declaración del componente*/
const Orders = () => {
	const items = ORDERS; /* llamando la data*/

	const renderItems = (data) => (
		/* Para renderizar los valores de la importación OrderItem*/
		<OrderItem item={data.item} />
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
	// footer: {
	// 	padding: 12,
	// 	borderTopColor: '#ccc',
	// 	borderTopWidth: 1,
	// },
	// confirm: {
	// 	backgroundColor: '#4FBDBA',
	// 	borderRadius: 10,
	// 	padding: 10,
	// 	flexDirection: 'row',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// total: {
	// 	flexDirection: 'row',
	// },
	text: {
		fontSize: 18,
		padding: 8,
		fontWeight: 'bold',
	},
});

export default Orders;
