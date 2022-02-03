import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

// mui
import {
	CircularProgress,
	Grid,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

export default function List({ places }) {
	const clasess = useStyles();
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState(0);

	return (
		<div className={clasess.container}>
			<Typography variant='h4'>Restraurant, Hotels & Attractions Around you</Typography>

			<FormControl className={clasess.formControl}>
				<InputLabel>Type</InputLabel>
				<Select value={type} onChange={(e) => setType(e.target.value)}>
					<MenuItem value='restaurants'>Restaurants</MenuItem>
					<MenuItem value='hotels'>Hotels</MenuItem>
					<MenuItem value='attractions'>Attractions</MenuItem>
				</Select>
			</FormControl>

			<FormControl className={clasess.formControl}>
				<InputLabel>Rating</InputLabel>
				<Select value={rating} onChange={(e) => setRating(e.target.value)}>
					<MenuItem value={0}>ALL</MenuItem>
					<MenuItem value={3}>Above 3</MenuItem>
					<MenuItem value={4}>Above 4</MenuItem>
					<MenuItem value={4.5}>Above 4.5</MenuItem>
				</Select>
			</FormControl>

			<Grid container spaceing={3} className={clasess.list}>
				{places?.map((place, i) => (
					<Grid item key={i} xs={12}>
						<PlaceDetails place={place} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}
