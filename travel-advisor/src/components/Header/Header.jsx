import React from "react";

import { Autocomplete } from "@react-google-maps/api";

// mui
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// styles
import useStyles from "./headerStyles";

export default function Header() {
	const classes = useStyles();

	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h5' className={classes.title}>
					Travel Advisor
				</Typography>

				<Box display='flex'>
					<Typography variant='h6' className={classes.title}>
						Explore more places
					</Typography>

					{/* <Autocomplete> */}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search ...'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	);
}
