import { ActionType } from "../action-types";
import { Action } from "../actions";

const initalState = 0;

const reducer = (state: number = initalState, action: Action) => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default: 
            return state
    }
}

export default reducer