import * as React from "react";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useActions } from "../actions";
import * as RaffleAction from "../actions/raffle";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Raffle } from "../model/raffle";

export const RaffleTable = () => {
	const classes = useStyles();
	const raffleActions = useActions(RaffleAction);
	const raffleList: Raffle[] = useSelector((state: RootState) => state.raffleList);

	useEffect(() => {
		raffleActions.getRaffle();
	}, []);

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="default">Start date</TableCell>
						<TableCell padding="default">End date</TableCell>
						<TableCell padding="default">Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{raffleList.map((n: Raffle) => {
						return (
							<TableRow
								key={n.id}
								hover
								// onClick={event => onRowClick(n)}
							>
								<TableCell>
									{n.start_date}
								</TableCell>
								<TableCell>
									{n.end_date}
									</TableCell>
								<TableCell>
									{n.amount}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);

}

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});