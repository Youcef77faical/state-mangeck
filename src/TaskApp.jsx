
import React, { useState } from "react";
import TaskList from "./Tasklist";
import todo from "../todo.json";

export default function TaskApp() {
    const [tasks, setTasks] = useState(todo);
    const [title, setTitle] = useState("");
    const [isFinished, setFinished] = useState(false);

    const addTask = (e) => {
        e.preventDefault();


        const newTask = {
            id: Math.floor(Math.random() * 1000),
            title: title,
            isFinished: isFinished,
        };

      
        setTasks([...tasks, newTask]);

     
        setTitle("");
        setFinished(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-lime-600 mb-8">My Todo List</h1>

          
            <TaskList tasks={tasks} />


            <form onSubmit={addTask} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add a New Task</h2>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                        Task Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                        placeholder="Task title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="isFinished" className="block text-sm font-medium text-gray-600">
                        Mark as Completed
                    </label>
                    <div className="flex items-center mt-2">
                        <input
                            id="isFinished"
                            type="checkbox"
                            checked={isFinished}
                            onChange={(e) => setFinished(e.target.checked)}
                            className="h-6 w-6 text-lime-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Completed</span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}
