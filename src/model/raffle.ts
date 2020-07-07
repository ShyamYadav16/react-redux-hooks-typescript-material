import { Todo, TodoActions } from "./todo";

export interface RaffleResponse {
	code: number,
	success: boolean,
	data: Raffle
}

export interface Raffle {
	id: number;
	start_date: string;
	end_date: string;
	amount: number;
}

export enum RaffleActions {
	GET_RAFFLE = 'GET_RAFFLE'
}

interface RaffleActionType<T, P> {
	type: T;
	payload: P;
}

export type RaffleAction =
	| RaffleActionType<typeof RaffleActions.GET_RAFFLE, Raffle[]>;