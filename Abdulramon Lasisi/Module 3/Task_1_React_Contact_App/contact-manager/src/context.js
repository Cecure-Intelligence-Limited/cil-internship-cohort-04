import React, { useState, useEffect, useContext } from 'react'
import uuid from 'react-uuid'
import { BsJournalArrowDown, BsJournalArrowUp } from 'react-icons/bs'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const [contacts, setContacts] = useState([])
  const [editUser, setEditUser] = useState({})
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    const getContacts = async () => {
      const contactsServer = await fetchContacts()
      const newIdContacts = contactsServer.map(contact => {
        return {
          ...contact,
          tag: uuid(),
          icon: <BsJournalArrowDown />,
          toggle: false
        }
      })

      setContacts(newIdContacts)
    }

    getContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const res = await fetch('http://localhost:5000/contacts')
      const data = await res.json()

      return data
    } catch (error) {
      console.log(error)
    }
  }

  const toggleSidebar = () => {
    setSidebar(prevState => !prevState)
  }

  const toggleInfoModal = tag => {
    const newContact = contacts.map(contact =>
      contact.tag === tag
        ? contact.toggle
          ? { ...contact, icon: <BsJournalArrowDown />, toggle: false }
          : { ...contact, icon: <BsJournalArrowUp />, toggle: true }
        : contact
    )

    setContacts(newContact)
  }

  const deleteContact = async (tag, id) => {
    try {
      await fetch(`http://localhost:5000/contacts/${id}`, {
        method: 'DELETE'
      })

      const newContact = contacts.filter(contact => contact.tag !== tag)

      setContacts(newContact)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    if (isEdit) {
      setEditUser({ ...editUser, [name]: value })
    } else {
      setNewUser({ ...newUser, [name]: value })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      if (isEdit && editUser.name && editUser.email && editUser.phone) {
        const { name, email, phone, tag, id } = editUser

        const updUserCont = {
          name,
          email,
          phone
        }

        const res = await fetch(`http://localhost:5000/contacts/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updUserCont)
        })
        const data = await res.json()

        setContacts(
          contacts.map(contact => {
            return contact.tag === tag
              ? { ...contact, name, email, phone }
              : contact
          })
        )

        setIsEdit(false)

        setNewUser({ name: '', email: '', phone: '' })

        alert('Contact Updated')
      } else if (newUser.name && newUser.email && newUser.phone) {
        const res = await fetch('http://localhost:5000/contacts', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        const data = await res.json()

        setContacts([
          ...contacts,
          {
            ...data,
            tag: uuid(),
            icon: <BsJournalArrowDown />,
            toggle: false
          }
        ])
        setNewUser({ name: '', email: '', phone: '' })

        alert('New Contact Added')
      } else {
        alert('Please complete the input field')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditClick = (tag, id) => {
    setIsEdit(true)

    const curretEdit = contacts.find(contact => contact.tag === tag)

    setEditUser(curretEdit)
  }

  return (
    <AppContext.Provider
      value={{
        sidebar,
        toggleSidebar,
        toggleInfoModal,
        contacts,
        deleteContact,
        newUser,
        handleChange,
        handleSubmit,
        handleEditClick,
        isEdit,
        editUser,
        setIsEdit
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
