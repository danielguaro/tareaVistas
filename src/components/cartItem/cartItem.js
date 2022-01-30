import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const { width, height } = Dimensions.get('window');

const CartItem = ({ item, onDelete }) => {
	//item = para recibir los datos de las categories.js
	// onDelete = para que se pueda eliminar del carrito algún producto
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.header}>{item.name}</Text>
			</View>
			<View style={styles.detail}>
				<View>
					<Text> cantidad: {item.quantity}</Text>
					<Text> $ {item.price}</Text>
				</View>
				<TouchableOpacity onPress={() => onDelete(item.id)}>
					<Ionicons name="trash-outline" size={30} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flex: 1,
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	header: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	detail: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export default CartItem;
