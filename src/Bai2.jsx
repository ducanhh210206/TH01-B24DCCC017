import React, { useState } from "react";

function TodoItem({ task }) {
    return (
        <li className="px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
            {task}
        </li>
    );
}

export default function Bai2() {
    const [task, setTask] = useState("");      
    const [tasks, setTasks] = useState([]);   

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);  
            setTask("");                 
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-xl font-semibold">Bài 2: Danh sách công việc</h2>

            {             }
            <div className="flex gap-2">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Nhập công việc..."
                    className="border rounded-lg px-4 py-2"
                />
                <button
                    onClick={addTask}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Thêm
                </button>
            </div>
            {               }
            <ul className="flex flex-col gap-2 mt-4">
                {tasks.map((t, index) => (
                    <TodoItem key={index} task={t} />
                ))}
            </ul>
        </div>
    );
}
