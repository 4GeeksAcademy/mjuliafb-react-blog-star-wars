const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
					id: "1"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
					id: "2"
				},
				{
					title: "FIRST",
					background: "white",
					initial: "white",
					id: "3"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
					id: "4"
				},
				{
					title: "FIRST",
					background: "white",
					initial: "white",
					id: "5"
				},
			],
			planets: [{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "1"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white",
				id: "2"
			},
			{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "3"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white",
				id: "4"
			},
			{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "5"
			},

			],
			vehicles: [{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "1"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white",
				id: "2"
			},
			{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "3"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white",
				id: "4"
			},
			{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "5"
			},

			],
			favorites: [{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "1"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white",
				id: "2"
			},
			{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "3"
			},
			{
				title: "SECOND",
				background: "white",
				initial: "white",
				id: "4"
			},
			{
				title: "FIRST",
				background: "white",
				initial: "white",
				id: "5"
			},

			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
