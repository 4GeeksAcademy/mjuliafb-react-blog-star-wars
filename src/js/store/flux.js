
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
						const { planets } = getStore();
						const updatedPlanetsList = planets.filter((item) => item.uid !== uid);
						setStore({ planets: updatedPlanetsList });
						localStorage.setItem(`planet-${uid}`, JSON.stringify(data));
					});
			},
			loadDetailsVehicles: (uid) => {
				return fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(res => res.json())
					.then(data => {
						const { vehicles } = getStore();
						const updatedVehiclesList = vehicles.filter((item) => item.uid !== uid);
						setStore({ vehicles: updatedVehiclesList });
						localStorage.setItem(`vehicle-${uid}`, JSON.stringify(data));
					});
			},
			loadDetailsCharacters: (uid) => {
				return fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(res => res.json())
					.then(data => {
						const { characters } = getStore();
						const updatedCharactersList = characters.filter((item) => item.uid !== uid);
						setStore({ characters: updatedCharactersList });
						localStorage.setItem(`characters-${uid}`, JSON.stringify(data));
					});
			},
			addFavorites: (name) => {
				const { favorites } = getStore();
				const isDuplicate = favorites.find(favorite => favorite.name === name);

				if (!isDuplicate) {
					const updatedFavorites = [...favorites, name];
					setStore({ favorites: updatedFavorites });
				} else {
					alert("Ya ha sido agregado a favoritos");
				}
			}
		}
	}
};

export default getState;
