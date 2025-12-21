import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const deleteEntry = (id, name) => {
    if (confirm(`Delete ${name}?`) == true) {
      personService.deletenumber(id)
        .then(removedID => {
          setPersons(persons.filter(person => person.id !== removedID))
        })
    }
  }
  const handlePersonChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNumber(e.target.value)
  const handleFilterChange = (e) => setFilter(e.target.value)

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: (`${persons.length + 1}`)
    }
    const found = persons.find(person => person.name === personObject.name)
    if (found == null) {

      personService
        .create(personObject)
        .then(() => {
          setPersons(persons.concat(personObject))
          setNewName('')
          setNumber('')
          console.log(personObject)
          setMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
    }
    else {
      if (confirm(`${newName} is already added to phonebook, replace number?`) == true) {
        const updatedObject = { ...personObject }
        updatedObject["id"] = found.id
        personService.update(updatedObject)
          .then(response => {
            console.log(response.data.id)
            setPersons(persons.map(person => person.id === found.id ? response.data : person))
          })
      }
    }
  }

  const contains = person => {
    const lower = person.name.toLowerCase()
    return (lower.includes(filter.toLowerCase()))
  }
  const peopleToShow = persons.filter(contains)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        name={{ value: newName, onChange: handlePersonChange }}
        number={{ value: newNumber, onChange: handleNumberChange }}
      />
      <h3>Numbers</h3>
      <Persons peopleToShow={peopleToShow} deleteEntry={deleteEntry} />
    </div>
  )
}

export default App