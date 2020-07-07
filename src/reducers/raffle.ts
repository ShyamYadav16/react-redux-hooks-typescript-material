import createReducer from "./createReducer";
import { Raffle, RaffleAction, RaffleActions } from "../model/raffle";

export const raffleList = createReducer<Raffle[]>([], {
	[RaffleActions.GET_RAFFLE](state: Raffle[], action: RaffleAction) {
		return [...[], ...action.payload];
	}
})