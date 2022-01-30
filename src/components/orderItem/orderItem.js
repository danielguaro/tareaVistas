import { Dimensions, StyleSheet, Text, View } from 'react-native';

import React from 'react';

// import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const OrderItem = ({ item }) => {
	//item = para recibir los datos de las categories.js
	const formatDate = (time) => {
		const date = new Date(time);
		return date.toLocaleDateString();
	};
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.header}>{formatDate(item.date)}</Text>
			</View>
			<View style={styles.detail}>
				<View>
					<Text> $ {item.total}</Text>
				</View>
				{/* Dejó con comentariio el touchable, pq no tiene sentido poder eliminar una orden de compra */}
				{/* <TouchableOpacity onPress={() => onDelete(item.id)}>
					<Ionicons name="trash-outline" size={30} />
				</TouchableOpacity> */}
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

export default OrderItem;
