import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"


type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
const toDoList1 = v1()
const toDoList2 = v1()

const App = () => {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    const removeTask = (todolistID : string, toDoListId: string) => {
        setTodolists({...tasks,[todolistID]: tasks[todolistID].filter(f => {f.id !== id})})

        // const filteredTasks = tasks.filter(t => t.id !== taskID)
        // setTasks(filteredTasks)
    }
    const changeFilter = (value: FilterValuesType, toDoListId: string) => {
        setTodolists(todolists.map(m => m.id === toDoListId ? {...m, filter: value} : m))

        // setTodoLists([...todoLists,todoLists.map(m => m.id === toDoListId ? {...m, filter: value} : m)])
        // setTodoLists(todoLists.map(tdl => tdl.id === toDoListId ? {...tdl, filter: filter}: tdl))

    }
    const addTask = (title: string, toDoListId: string) => {
        setTodolists({...tasks,[todolistID]:{id: v1(), title: title, isDone: false},[...tasks[todolists],]})


        // const newTask: TaskType = {
        //     id: v1(),
        //     title,
        //     isDone: false
        // }
        // setTasks([newTask, ...tasks])
    }

    const changeTaskStatus = (taskID: string, isDone: boolean, toDoListId: string) => {
        const updatedTasks = tasks.map(t => t.id === taskID ? {...t, isDone: isDone} : t)
        setTasks(updatedTasks)
    }


    return (
        <div className="App">
            {todolists.map(tdl => {
                let tasksForTodoList = tasks[tdl.id]
                if (tdl.filter === "active") {
                    tasksForTodoList = tasks[tdl.id].filter(t => !t.isDone)
                }
                if (tdl.filter === "completed") {
                    tasksForTodoList = tasks[tdl.id].filter(t => t.isDone)
                }
                return (
                    <TodoList
                        key={tdl.id}
                        id={tdl.id}
                        title={tdl.title}
                        tasks={tasksForTodoList}
                        filter={tdl.filter}
                        addTask={addTask}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeTaskStatus}
                    />
                )
            })}
        </div>
    );
}

export default App;
