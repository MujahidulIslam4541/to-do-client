
const AddToDo = () => {
    const handleAddTask = () => {
        console.log("Task Added")
    }
    return (
        <div>
            <div>
                <input type="text" placeholder='Add ToDo' className='border border-gray-300 p-2 rounded-xl w-[480px] m-2' />
                <button onClick={handleAddTask()} className='bg-blue-400 text-white px-4 py-2 rounded-2xl'>Add Task</button>
            </div>


        </div>
    )
}

export default AddToDo
