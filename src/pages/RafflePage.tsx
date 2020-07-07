import * as React from "react";
import { Grid } from "@material-ui/core";
import { RaffleTable } from "../components/RaffleTable";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import configureStore from "../configureStore";
import { getRaffle } from "../actions/raffle";

const { store } = configureStore();

export function RafflePage() {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<RaffleTable />
			</Grid>
		</Grid>
	);

}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
		[theme.breakpoints.down("md")]: {
			paddingTop: 50,
			paddingLeft: 15,
			paddingRight: 15,
		},
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},
}));