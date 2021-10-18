import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import Button from "./components/Button";
import InputWithButton from "./components/InputWithButton";
import Input from './components/Input'

export  type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodolist: (todolistID: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    // const addTaskHandlerForAddTitle = () => { // лишний код для дополнения не прохидит проверки
    //     props.addTask(props.todolistID, title)
    // }
    const addTaskHandlerForAddTitle= () => {
        if (title.trim() !== "") {
            props.addTask(props.todolistID, title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const addTaskHandlerForEnter = () => {
      props.addTask(props.todolistID,title)
    }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    const onClickHandlerForRemoveTodolist = () => props.removeTodolist(props.todolistID)


    // const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
    // const onActiveClickHandler = () => props.changeFilter(props.todolistID,"active");
    // const onCompletedClickHandler = () => props.changeFilter(props.todolistID,"completed");

    const tsarFoo = (value: FilterValuesType) => { // делаем одну callback
        props.changeFilter(props.todolistID, value)
    }

    const onClickHandlerForRemove = (Tid: string) => {props.removeTask(props.todolistID, Tid)} // удаление таски в методе map (передаем t.id)


    return <div>
        <h3>{props.title}</h3>
        <Button callback={onClickHandlerForRemoveTodolist} name={'X'}/>
        {/*<div>*/}
        {/*    <input value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           className={error ? "error" : ""}*/}
        {/*    />*/}
        {/*    <button onClick={addTask}>+</button>*/}
        {/*    {error && <div className="error-message">{error}</div>}*/}
        {/*</div>*/}
        {/*<InputWithButton addTask={props.addTask} todolistID={props.todolistID}/>*/}

        <Input title={title} setTitle={setTitle} addTask={addTaskHandlerForEnter}/>
        <Button callback={addTaskHandlerForAddTitle} name={'+'} />

        <ul>
            {
                props.tasks.map(t => {
                    // const onClickHandlers = () => props.removeTask(props.todolistID, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button callback={() => onClickHandlerForRemove(t.id)} name={'x'}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button style={props.filter === 'all' ? "active-filter" : ""}
                    callback={() => tsarFoo('all')}
                    name={'all'}/>
            <Button style={props.filter === 'active' ? "active-filter" : ""}
                    callback={() => tsarFoo('active')}
                    name={'active'}/>
            <Button style={props.filter === 'completed' ? "active-filter" : ""}
                    callback={() => tsarFoo('completed')}
                    name={'completed'}/>
        </div>
    </div>
}
