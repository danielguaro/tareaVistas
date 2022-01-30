/* Aquí creamos un arreglo de objetos, para las ordenes*/
export const ORDERS = [
	{
		id: '1',
		date: 1605828800000,
		total: 7300,
		items: [
			{
				category: '1',
				name: 'Pan Baguette',
				description: 'Clásico pan francés',
				weight: '350gr',
				price: 1600,
				quantity: 3,
			},
			{
				id: '3',
				category: '2',
				name: 'Pan Hamburguesa',
				description: 'Textura suave, decorado con semillas de sésamo tostadas',
				weight: '120gr',
				price: 500,
				quantity: 5,
			},
		],
	},
];
/* Ahora toca crear un componente que nos liste, la data previa */
