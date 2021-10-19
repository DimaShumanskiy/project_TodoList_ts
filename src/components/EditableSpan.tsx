import React, {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    callback:(title:string)=>void
}

export const EditableSpan = ({title, ...props}: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle,setNewTitle] = useState(title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const addTask = () => {
        // let newTitle = title.trim();
        // if (newTitle !== "") {
            props.callback(newTitle);
        // }
    }
    const editTrue = () => {
        setEdit(true)
    }
    const editFalse=()=> {
        setEdit(false)
        addTask();
    }

    return (
        edit
            ? <input value={newTitle}
                     onBlur={editFalse}
                     autoFocus
                     onChange={onChangeHandler}/>
            : <span onDoubleClick={editTrue} >{title}</span>
    )
}