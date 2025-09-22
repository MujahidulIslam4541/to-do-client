import React from 'react'

const AddToDo = () => {
    return (
        <div>
            <div>

                <input type="text" placeholder='Add ToDo' className='border border-gray-300 p-2 rounded-xl w-[480px] m-2' />
                <button className='bg-blue-400 text-white px-4 py-2 rounded-2xl'>Add Task</button>
            </div>

            <div className='flex justify-between m-2'>
                <h2 className='text-blue-400'>All Task List</h2>
                <p>Total Task:20</p>
            </div>
        </div>
    )
}

export default AddToDo
