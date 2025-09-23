import { useQuery } from "@tanstack/react-query";
import { IoIosCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import Loading from "./Loading";

const Table = () => {
    const fetchTodos = async () => {
        const res = await fetch("http://localhost:3000/getItems");
        return res.json();
    };

    const { data = [], isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    });
    const todos = data?.data || [];
    console.log("API response:", todos);
    if (isLoading) {
        return <Loading></Loading>
    };

    const handleCheckMark = (id) => {
        console.log("Check Mark Clicked", id)
    }

    const handelDeleteToDo = (id) => {
        console.log("Delete Clicked", id)
    }

    return (
        <>

            <div className='flex justify-between m-2'>
                <h2 className='text-blue-400'>All Task List</h2>
                <p>Total Task:{todos?.length}</p>
            </div>

            {todos?.map((todo) => (
                <div
                    key={todo._id}
                    className="flex justify-between rounded-2xl shadow border border-gray-300 p-4 mt-2"
                >
                    <p>{todo.title}</p>
                    <div className="flex gap-2">
                        <button onClick={() => handleCheckMark(todo._id)} className="bg-blue-200 rounded-xl text-3xl cursor-pointer">
                            <IoIosCheckmark />
                        </button>
                        <button onClick={()=>handelDeleteToDo(todo._id)} className="bg-red-200 rounded-xl text-3xl cursor-pointer">
                            <MdDeleteForever className="text-red-500" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Table;
