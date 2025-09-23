import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const AddToDo = () => {
    const [task, setTask] = useState("");
    const queryClient = useQueryClient();
    const handleAddTask = async () => {
        if (!task) return toast.error("Please enter a task!");

        await axios.post("http://localhost:3000/create-item", { title: task });
        toast.success("Task added successfully!");

        setTask("");
        //  reload todos
        queryClient.invalidateQueries(["todos"]);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Add ToDo"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="border border-gray-300 p-2 rounded-xl w-[480px] m-2"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-400 text-white px-4 py-2 rounded-2xl"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default AddToDo;
