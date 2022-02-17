import * as types from '../ActionType'

export default function(state=[],action)
{
    switch(action.type){
        case types.ADD_ITEM : return [...state,{
            pid : action.payload.pid,
            qty : 1
        }]
        default : return state;
    }
}