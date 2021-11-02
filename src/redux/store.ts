import {combineReducers, createStore} from "redux";
import {TaskReducer} from "./TaskReducer";
import {FilterReducer} from "./FilterReducer";

export type rootReducerType = ReturnType<typeof rootReducer>


let rootReducer = combineReducers({
    tasks: TaskReducer,
    filter: FilterReducer
})

export let store = createStore(rootReducer)