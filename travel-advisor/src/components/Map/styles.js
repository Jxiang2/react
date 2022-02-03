import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	paper: {
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100px",
	},
	mapContainer: {
		marginTop: "15px",
		height: "85vh",
		width: "100%",
		border: "1px solid lightgrey",
		boxShadow: "3px 3px 5px rgba(0,0,0,0.05)",
		background: "lightgrey",
		borderRadius: "1px",
	},
	markerContainer: {
		position: "absolute",
		transform: "translate(-50%, -50%)",
		zIndex: 1,
		"&:hover": { zIndex: 2 },
	},
	pointer: {
		cursor: "pointer",
	},
}));
