import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlacesData } from "./api/";

import { CssBaseline, Grid } from "@material-ui/core";

function App() {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});

	// initialize google map
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoordinates({ lat: latitude, lng: longitude });
		});
	}, []);

	// get local place data
	useEffect(() => {
		const controller = new AbortController();

		if (bounds) {
			getPlacesData(bounds.sw, bounds.ne, controller).then((data) => {
				setPlaces(data);
			});
		}

		return () => {
			controller.abort();
		};
	}, [coordinates, bounds]);

	return (
		<>
			<CssBaseline />
			<Header />

			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>

				<Grid item xs={12} md={8}>
					<Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} />
				</Grid>
			</Grid>
		</>
	);
}

export default App;
