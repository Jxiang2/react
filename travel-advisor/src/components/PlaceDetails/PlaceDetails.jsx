import React from "react";

// mui
import { Rating } from "@material-ui/lab";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActivities,
	CardActionArea,
	Chip,
} from "@material-ui/core";

// styles
import useStyles from "./placeHolderStyles";

export default function PlaceDetails({ place }) {
	const classes = useStyles();
	return (
		<Card elevation={6} variant='outlined'>
			<CardActionArea>
				<CardMedia
					style={{ height: 350 }}
					image={
						place.photo
							? place.photo.images.large.url
							: "https://i.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY"
					}
					title={place.name}
				/>

				<CardContent>
					<Typography gutterBottom variant='h5'>
						{place.name}
					</Typography>
					<Box display='flex' justifyContent='space-between'>
						<Typography variant='subtitle1'>Price</Typography>
						<Typography variant='subtitle1'>{place.price_level}</Typography>
					</Box>
					<Box display='flex' justifyContent='space-between'>
						<Typography variant='subtitle1'>Ranking</Typography>
						<Typography variant='subtitle1'>{place.ranking}</Typography>
					</Box>
					{place?.awards?.map((award, i) => (
						<Box key={i} my={1} display='flex' justifyContent='space-between'>
							<img src={award.images.small} alt={award.display_name} />
							<Typography variant='subtitle2' color='textSecondary'>
								{award.display_name}
							</Typography>
						</Box>
					))}
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
