import React from 'react'
import { MdEditNote } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Main = () => {
  const { contacts, toggleInfoModal, deleteContact, handleEditClick } =
    useGlobalContext()

  return (
    <main className='p-2'>
      {contacts.map(contact => {
        const { tag, name, email, phone, icon, toggle, id } = contact

        return (
          <section key={tag} className='mt-4 border rounded-lg border-gray-300'>
            <div className='flex items-center justify-between p-2'>
              <div className='flex gap-2 items-center'>
                <h2>{name}</h2>

                <span
                  className='cursor-pointer'
                  onClick={() => toggleInfoModal(tag)}
                >
                  {icon}
                </span>
              </div>

              <div className='flex gap-2 items-center'>
                <Link to={`/contact/edit/${tag}`}>
                  <MdEditNote
                    className='text-blue-900 transition hover:scale-150 cursor-pointer'
                    onClick={() => handleEditClick(tag, id)}
                  />
                </Link>

                <FaTimes
                  className='text-red-600 transition hover:scale-150 cursor-pointer'
                  onClick={() => deleteContact(tag, id)}
                />
              </div>
            </div>

            {toggle && (
              <div className='flex flex-col m-4 px-4 py-2 border rounded-lg border-gray-300 space-y-2'>
                <aside>
                  Email: <span className='ml-1'>{email}</span>
                </aside>
                <hr className='-mx-4' />
                <aside>
                  Phone: <span className='ml-1'>{phone}</span>
                </aside>
              </div>
            )}
          </section>
        )
      })}
    </main>
  )
}

export default Main
