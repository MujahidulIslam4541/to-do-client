import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoIosCheckmark } from 'react-icons/io'
import { MdDeleteForever } from 'react-icons/md'

const table = () => {
    return (
        <>
            <div className='flex justify-between rounded-2xl shadow border border-gray-300 p-4 mt-2'>
                <p>lorem.....</p>
                <div className='flex gap-2 '>
                    <button className='bg-blue-200  rounded-xl text-3xl cursor-pointer'><IoIosCheckmark /></button>
                    <button className='bg-red-200 rounded-xl text-3xl cursor-pointer'><MdDeleteForever className='text-red-500' /></button>
                </div>
            </div>


            <div className='flex justify-between rounded-2xl shadow border border-gray-300 p-4 my-2'>
                <p>lorem.....</p>
                <div className='flex gap-2 '>
                    <button className='bg-blue-200  rounded-xl text-3xl cursor-pointer'><IoIosCheckmark /></button>
                    <button className='bg-red-200 rounded-xl text-3xl cursor-pointer'><MdDeleteForever className='text-red-500' /></button>
                </div>
            </div>


            <div className='flex justify-between rounded-2xl shadow border border-gray-300 p-4 '>
                <p>lorem.....</p>
                <div className='flex gap-2 '>
                    <button className='bg-blue-200  rounded-xl text-3xl cursor-pointer'><IoIosCheckmark /></button>
                    <button className='bg-red-200 rounded-xl text-3xl cursor-pointer'><MdDeleteForever className='text-red-500' /></button>
                </div>
            </div>

        </>



    )
}

export default table
