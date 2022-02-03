import React from "react";
import useStyles from "./placeHolderStyles";

export default function PlaceDetails({ place }) {
	const classes = useStyles();
	return <h1>{place.name}</h1>;
}
