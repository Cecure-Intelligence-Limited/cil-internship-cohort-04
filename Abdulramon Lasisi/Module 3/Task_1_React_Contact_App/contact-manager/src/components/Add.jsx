import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Add = () => {
  const { newUser, handleChange, handleSubmit, isEdit, editUser, setIsEdit } =
    useGlobalContext()

  const { name, email, phone } = editUser

  return (
    <section className='border items-center rounded-md m-4 border-gray-300 overflow-hidden'>
      <div className='flex justify-between bg-gray-200 px-4 py-2'>
        <h2 className='text-lg font-bold p-1'>
          {isEdit ? 'Edit Contact' : 'Add Contact'}
        </h2>
        <button
          className='border px-3 text-xs cursor-pointer rounded-md shadow-sm border-gray-700 text-gray-700 hover:text-gray-100 hover:bg-gray-700 transition'
          onClick={() => setIsEdit(false)}
        >
          <Link to='/'>Back Home</Link>
        </button>
      </div>
      <hr className='bg-gray-300' />
      <form
        onSubmit={handleSubmit}
        className='bg-gray-50 px-4 py-2 space-y-6 pt-4'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name...'
            value={isEdit ? name : newUser.name}
            onChange={handleChange}
            className='rounded-md px-4 py-2 border transition focus:outline-blue-200'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email...'
            value={isEdit ? email : newUser.email}
            onChange={handleChange}
            className='rounded-md px-4 py-2 border transition focus:outline-blue-200'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            placeholder='Enter your phone...'
            value={isEdit ? phone : newUser.phone}
            onChange={handleChange}
            className='rounded-md px-4 py-2 border transition focus:outline-blue-200'
          />
        </div>

        <div className='flex bg-gray-600 rounded-md transition hover:bg-gray-800'>
          <button className='w-full py-2' type='submit'>
            {isEdit ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Add
