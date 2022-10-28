import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
const Add = ({onAdd}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ name, email, phone })
    
    setEmail('')
    setName('')
    setPhone('')
  }
  return (
    <>
      <div className='grid justify-center'>
      <div className=' mt-4 grid justify-center items-center  rounded-lg bg-gray-100 mx-8 md:w-[640px] md:mx-32'>
        <div className='  justify-center items-center '>
            <div className=' md:w-[640px]  px-6  py-3 border border-gray-400 bg-gray-200  text-left font-bold text-gray-800 rounded-t-md'>
               <p >Add Contact</p>   
            </div>
            
            <form action="" className='w-[400px] md:w-[640px]  text-left  px-4  pt-4' onSubmit={onSubmit}>
              <div className='flex flex-col justify-center space-y-2 '>
                <label className='text-gray-700'>Name</label>
            <input type="text" class=" border  pl-4 py-3 rounded-md" placeholder='Enter your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />   
          </div>
          <div className='flex flex-col justify-center space-y-2 mt-4'>
                <label className='text-gray-700'>Email</label>
            <input type="text" class=" border  pl-4 py-3 rounded-md" placeholder='Enter your email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />   
          </div>
          <div className='flex flex-col justify-center space-y-2 mt-4'>
                <label className='text-gray-700'>phone</label>
            <input type="text" class=" border  pl-4 py-3 rounded-md" placeholder='Enter your phone...'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />   
          </div>
          
          <button className='bg-gray-800 text-center w-full text-gray-50 py-2 rounded-md my-4'  >Submit</button>
              
              
            </form>  
        </div>
          
      </div>
      
      </div>
      <Footer/>
    </>
    
    
  )
}

export default Add
