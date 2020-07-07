import { Raffle, RaffleAction, RaffleActions, RaffleResponse } from "../model/raffle";
import http from "../http-common";
import { Dispatch } from "react";

export const getRaffle = () => {
	// const raffle: Raffle = await http.get('/raffle/r');
	//
	// console.log('Raffle ----> ' + JSON.stringify(raffle));
	//
	// return (dispatch: Dispatch<any>, getState: Function) => {
	// 	console.log('Raffle ----> ' + JSON.stringify(raffle));
	// 	dispatch({ type: RaffleActions.GET_RAFFLE, payload: raffle });
	// };
	return async (dispatch: Dispatch<RaffleAction>) => {
		try {
			const response = await http.get('/raffle/r');
			const raffle: RaffleResponse = response.data;
			console.log('Raffle ----> ' + JSON.stringify(raffle));
			dispatch({ type: RaffleActions.GET_RAFFLE, payload: [raffle.data] });
		}
		catch(error) {
			console.log(error);
		}

		return 'done';
	}
};