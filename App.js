// import { Text, View } from 'react-native';

import AppNavigation from './src/navigation/navigation';
import React from 'react';

const App = () => {
	return <AppNavigation />;
};

/* Se borra el contenido que tenía el return, ya que no es necesario, por en de la constante que importa el StyleSheet, tampoco es necesaria*/
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1 /* recordar que sin esto, no puedo reenderizar lo que tenga al interior del contenedor*/,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// });

export default App;
