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
	const [bounds, setBounds] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoordinates({ lat: latitude, lng: longitude });
		});
	}, []);

	useEffect(() => {
		bounds &&
			getPlacesData(bounds.sw, bounds.ne).then((data) => {
				console.log(data);
				setPlaces(data);
			});
	}, [coordinates, bounds]);

	return (
		<>
			<CssBaseline />
			<Header />

			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>

				<Grid item xs={12} md={8}>
					<Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} />
				</Grid>
			</Grid>
		</>
	);
}

export default App;
