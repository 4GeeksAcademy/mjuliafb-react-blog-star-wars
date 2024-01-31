
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			loadCharacter: () => {
				return fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						setStore({ characters: data.results });
					})
			},
			loadPlanets: () => {
				return fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
					})
			},
			loadVehicles: () => {
				return fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => {
						setStore({ vehicles: data.results });
					})
			},
			loadDetailsPlanets: (uid) => {
				return fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						const { planets } = getStore();
						const updatedPlanetsList = planets.filter((item) => item.uid !== uid);
						setStore({ planets: updatedPlanetsList });
					})
			},
		}
	}
};

export default getState;
