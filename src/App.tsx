import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist"

export type TaskType ={
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = "all"|"active"|"completed"

function App() {
      let[tasks, setTasks] = useState<Array<TaskType>>(
            [
                { id: 1, title: "HTML&CSS", isDone: true },
                { id: 2, title: "JS", isDone: true },
                { id: 3, title: "ReactJS", isDone: false },
                { id: 4, title: "Yo", isDone: false },
            ]
        )
    const [filter, setFilter] = React.useState<FilterValuesType>("all")
    // let tasks = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    //     { id: 4, title: "Yo", isDone: false },
    // ]
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false },
    // ]
    const removeTask = (taskID: number) => {
    setTasks(tasks.filter(t => t.id !== taskID))
    }
    const changeFilter = (filter: FilterValuesType) => {
          setFilter(filter)
    }


    let taskForRender = tasks
    if(filter === "active"){
        taskForRender = tasks.filter(t => t.isDone === false)
    }
    if(filter === "completed"){
        taskForRender = tasks.filter(t => t.isDone === true)
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForRender}
            removeTask={removeTask}
                      changeFilter={changeFilter}
            />
            {/*<Todolist title="Songs" tasks={tasks2} />*/}
        </div>
    );
}

export default App;
