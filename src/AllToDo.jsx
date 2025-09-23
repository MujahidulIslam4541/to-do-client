import { useQuery } from "@tanstack/react-query";
import { IoIosCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import Loading from "./Loading";
import toast from "react-hot-toast";

const AllToDo = () => {
    const fetchTodos = async () => {
        const res = await fetch("http://localhost:3000/getItems");
        return res.json();
    };
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    });
    const todos = data?.data || [];
    console.log("API response:", todos);

    if (isLoading) {
        return <Loading />;
    }

    const handleCheckMark = async (id) => {
        await fetch(`http://localhost:3000/update-item/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isCompleted: true }),
        });
        toast.success("Task completed!");
        refetch()
    };


    const handelDeleteToDo = async (id) => {
        console.log("Delete Clicked", id);
        await fetch(`http://localhost:3000/delete-item/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        toast.success("Task deleted!");
        refetch()
    };

    return (
        <>
            <div className='flex justify-between m-2'>
                <h2 className='text-blue-400'>All Task List</h2>
                <p>Total Task: {todos?.length}</p>
            </div>

            {todos?.map((todo) => (
                <div
                    key={todo._id}
                    className={`flex justify-between rounded-2xl shadow border border-gray-300 p-4 mt-2
            ${todo.isCompleted ? "line-through opacity-70" : ""}
        `}
                >
                    <div className="flex justify-between items-center w-full">
                        <p className="font-medium">{todo.title}</p>
                        <p className="text-sm text-gray-500">
                            {new Date(todo.createdAt).toLocaleString()}
                        </p>
                    </div>


                    <div className="flex gap-2 pl-4">
                        <button
                            onClick={() => handleCheckMark(todo._id)}
                            className="bg-blue-200 rounded-xl text-3xl cursor-pointer"
                        >
                            <IoIosCheckmark />
                        </button>
                        <button
                            onClick={() => handelDeleteToDo(todo._id)}
                            className="bg-red-200 rounded-xl text-3xl cursor-pointer"
                        >
                            <MdDeleteForever className="text-red-500" />
                        </button>
                    </div>
                </div>
            ))}

        </>
    );
};

export default AllToDo;
