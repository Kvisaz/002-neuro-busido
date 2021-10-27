import {combineReducers} from "redux";
import {dataReducer, IDataState} from "./data";


export const rootReducer = combineReducers({
    data: dataReducer
});

export interface IRootState {
    data: IDataState;
}