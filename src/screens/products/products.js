import {
	Button,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React, { useEffect } from 'react';
import { filterBreads, selectBread } from '../../store/actions/breads.action';
import { useDispatch, useSelector } from 'react-redux';

import { BREADS } from '../../utils/data/breads';
import ProductsItem from '../../components/productsItem/productsItem';

// import { SelectCategory } from '../../store/actions/category.action';

const Products = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const categoryBreads = useSelector((state) => state.breads.filteredBread);
	const category = useSelector((state) => state.categories.selected);

	const handleSelected = (item) => {
		dispatch(selectBread(item.id));
		navigation.navigate('Product Detail', {
			// productID: item.id,
			name: item.name,
			// product: item,
		});
	};

	const renderProducts = ({ item }) => {
		// No neseito agregar el onSelected ya que lo tengo de forma global en mi constante handleSelectedCategory
		return <ProductsItem item={item} onSelected={handleSelected} />;
	};

	useEffect(() => {
		dispatch(filterBreads(category.id));
	}, []); /* Para que la acción se ejecute una vez (cuando cargue la vista)*/

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				{/* Reemplazo el Texto y el button que tenia por un FlatList */}
				<FlatList
					data={categoryBreads}
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
