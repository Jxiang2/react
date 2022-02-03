import React from "react";

import GoogleMapReact from "google-map-react";

// mui
import {
	Paper,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import Rating from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import { LocationCityOutlined } from "@material-ui/icons";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

// styles
import useStyles from "./styles";

export default function Map() {
	const classes = useStyles();
	// false if width of device > 600px
	const isMobile = useMediaQuery("(min-width: 600px)");
	const coordinates = { lat: 0, lng: 0 };

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={""}
				onChildClick={""}
				bootstrapURLKeys={{
					key: "AIzaSyBfOfM73t--Qafrz5E3NO0Us_M2A_GYU3s",
				}}></GoogleMapReact>
		</div>
	);
}
