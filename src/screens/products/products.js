import {
	Button,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { BREADS } from '../../utils/data/breads';
import ProductsItem from '../../components/productsItem/productsItem';
import React from 'react';

const Products = ({ navigation, route }) => {
	const breads = BREADS.filter(
		(bread) => bread.category === route.params.categoryId
	);

	const handleSelected = (item) => {
		navigation.navigate('Product Detail', {
			productID: item.id,
			name: item.name,
			product: item,
		});
	};

	const renderProducts = ({ item }) => {
		// No neseito agregar el onSelected ya que lo tengo de forma global en mi constante handleSelectedCategory
		return <ProductsItem item={item} onSelected={handleSelected} />;
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				{/* Reemplazo el Texto y el button que tenia por un FlatList */}
				<FlatList
					data={breads}
					renderItem={renderProducts}
					keyExtractor={(item) => item.id} //Para saber a que Id pertenece.
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Products;
