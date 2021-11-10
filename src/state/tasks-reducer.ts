import {TasksStateType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string,
    todolistId: string,
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string
    todolistId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-STATUS-TASK',
    taskId: string
    isDone: boolean,
    todolistId: string,
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TITLE-TASK',
    taskId: string
    title: string,
    todolistId: string,
}


type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state,[action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case 'ADD-TASK' :
            return {...state,[action.todolistId]: [{id: v1(), title: action.title , isDone: false}, ...state[action.todolistId]]}
        case 'CHANGE-STATUS-TASK' :
            return  {...state,[action.todolistId]: state[action.todolistId]
                    .map(m => m.id !== action.taskId ? m : {...m, isDone: action.isDone} )}
         case 'CHANGE-TITLE-TASK' :
            return  {...state,[action.todolistId]: state[action.todolistId]
                    .map(m => m.id !== action.taskId ? m : {...m, title: action.title} )}

        default:
            throw new Error("I don't understand this type")
    }
}


export const removeTaskAC = (taskId: string,todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK' , taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean,todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-STATUS-TASK', taskId, isDone ,todolistId}
}
export const changeTaskTitleAC = (taskId: string, title: string,todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TITLE-TASK', taskId, title ,todolistId}
}
