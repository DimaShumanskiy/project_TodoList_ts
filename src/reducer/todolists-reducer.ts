import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(f => f.id !== action.id)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            return [...state, {id: newTodolistId, title: action.title, filter: 'all'}]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(m => m.id === action.id ? {...m, title: action.title} : m)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(m => m.id === action.id ? {...m, filter: action.filter} : m)
        }
        default:
            return state
    }
}

type ActionType = RemoveTodolistType
    | AddTodolostType
    | changeTodolostType
    | FilterTodolostType
type RemoveTodolistType = ReturnType<typeof RemuveTodolostAC>

export const RemuveTodolostAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        id: id
    } as const
}

export type AddTodolostType = ReturnType<typeof AddTodolostAC>
export const AddTodolostAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        title
    } as const
}

export type changeTodolostType = ReturnType<typeof changeTodolostAC>
export const changeTodolostAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id,
        title,
    } as const
}

export type FilterTodolostType = ReturnType<typeof FilterTodolostAC>
export const FilterTodolostAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id,
        filter,
    } as const
}
