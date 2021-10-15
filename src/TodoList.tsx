import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import {v1} from "uuid";



export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string, toDoListId: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, toDoListId: string) => void
    removeTask: (taskID: string, toDoListId: string) => void
    changeFilter:(filter: FilterValuesType, toDoListId: string) => void
    id: string
}


function TodoList(props: TodoListPropsType) {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const tasksJSXElements = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.id)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
        return (
            <li key={t.id} className={t.isDone ? "done" : ""}>
                <input
                    type="checkbox"
                    checked={t.isDone}
                    onChange={changeTaskStatus}
                />
                <span>{t.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })





    const onClickAddTaskToTodoList = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle) {
            props.addTask(trimmedTitle, props.id)
            setTitle("")
        } else {
            setError(true)
        }
    }
    const onKeyPressAddTaskToTodoList = (e: KeyboardEvent<HTMLInputElement> ) => {
        if(e.key === "Enter"){
            onClickAddTaskToTodoList()
        }
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }
    const onClickSetAllFilter = () => props.changeFilter("all", props.id)
    const onClickSetActiveFilter = () => props.changeFilter("active", props.id)
    const onClickSetCompletedFilter = () => props.changeFilter("completed", props.id)

    const allBtnClass = props.filter === "all"? "active-filter" : ""
    const activeBtnClass = props.filter === "active"? "active-filter" : ""
    const completedBtnClass = props.filter === "completed"? "active-filter" : ""
    const errorMessage = error ? <p style={{margin: "0", color: "red"}}>Title is required!</p>
        : <p style={{margin: "0"}}>Enter new task title</p>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    // placeholder={}
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyPress={onKeyPressAddTaskToTodoList}
                    className={error ? "error" : ""}
                />
                <button
                    onClick={onClickAddTaskToTodoList}
                >+</button>
                {errorMessage}
            </div>
            <ul>
                { tasksJSXElements }
            </ul>
            <div>
                <button
                    className={allBtnClass}
                    onClick={onClickSetAllFilter}
                >All</button>
                <button
                    className={activeBtnClass}
                    onClick={onClickSetActiveFilter}
                >Active</button>
                <button
                    className={completedBtnClass}
                    onClick={onClickSetCompletedFilter}
                >Completed</button>
            </div>
        </div>
    )
}

export default TodoList;