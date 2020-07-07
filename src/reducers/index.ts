import { History } from "history";
import { combineReducers } from "redux";
import { Todo } from "../model";
import * as todoReducer from "./todo";
import * as raffleReducer from "./raffle";
import { Raffle } from "../model/raffle";

export interface RootState {
	todoList: Todo[];
	raffleList: Raffle[];
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
		...raffleReducer
	});
