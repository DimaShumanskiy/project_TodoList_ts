import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {TaskType} from "../Todolist";


export default {
    title: 'TodoList/Task',
    component: Task,
    args:{
        removeTask: action('removeTask'),
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
}
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
TaskIsDoneStory.args = {
    task: {id: '1', isDone: true , title: 'react'},
}

export const TaskIsNotStory = Template.bind({});

TaskIsNotStory.args = {
    task: {id: '2', isDone: false , title: 'js'},
}



