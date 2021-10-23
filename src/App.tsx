import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const task_1: Array<TaskType> = [ //TaskType
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "React", isDone: true},
    ]

    return (
        <div className="App">
            <TodoList
                title={"What to learn."}
            tasks={task_1}
            />

        </div>
    );
}

export default App;
