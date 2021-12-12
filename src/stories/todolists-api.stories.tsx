import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {
            withCredentials: true
        })
        promise.then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'React'},
            {
                withCredentials: true,
                headers: {
                    'api-kay': '0fc5ab59-9999-42ca-9a0e-4e8db059ea1e'
                }
            })
        promise.then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
