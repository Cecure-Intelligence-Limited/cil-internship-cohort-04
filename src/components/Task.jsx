import React from 'react'
import {useState} from 'react'
import { HiChevronDoubleDown } from "react-icons/hi";
import { TiEdit } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Task = ({ task, onDelete }) => {
    const [details, setDetails] = useState(false)

    const showDetails = () => {
        setDetails(!details)
    }
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center items-center mt-4 border w-[300px] sm:w-[400px] md:w-[800px] '>
            <div className='flex  justify-between items-center w-5/6   py-8 px-4'>
                <div className='flex items-center space-x-2'>
                    <h3>{task.name}</h3>
                    <HiChevronDoubleDown className='text-red-700' onClick={showDetails}/>
        
                </div>
                <div className='flex items-center space-x-4'>
                    <TiEdit />
                    <AiOutlineClose onClick={() => onDelete(task.id)}/>
                </div>
            </div>

            <div className={details ? 'border mb-6 ' : "hidden"}>
                <div className='py-4 px-4 text-left divide-y'>
                    <p className='pb-4'>Email: <span>{task.Email}</span></p>
                    <p className='pt-4'>Phone: <span>{task.Phone}</span></p>
                </div>
            </div>
        </div>
        </div>
        
        
      
  )
}

export default Task
