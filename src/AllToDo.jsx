import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const table = () => {
    return (
        <div className='flex justify-between rounded-2xl shadow border border-gray-300 p-4 m-2'>
            <p>lorem.....</p>
            <div className='flex gap-2 text-xl'>
                <FaCheck className='text-blue-400'/>
                <MdDeleteForever  className='text-red-500'/>
            </div>
        </div>
    )
}

export default table
