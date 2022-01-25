import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import React from 'react';

const { width, height } = Dimensions.get('window');

const ProductsItem = ({ item, onSelected }) => {
	//item = para recibir los datos de las categories.js
	return (
		<TouchableOpacity onPress={() => onSelected(item)}>
			<View style={styles.productsItem}>
				<View>
					<Text style={styles.title}>{item.name}</Text>
				</View>
				<View>
					<Text style={styles.details}>$ {item.price}</Text>
					<Text style={styles.details}>{item.weight}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	productsItem: {
		flex: 1,
		margin: 16,
		elevation: 10,
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		borderStyle: 'dotted',
	},
	title: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 25,
		color: '#2B2E4A',
	},
	details: {
		fontWeight: '700',
		fontFamily: 'Comfortaa-Bold',
		fontSize: 20,
		alignSelf: 'center',
	},
});

export default ProductsItem;
