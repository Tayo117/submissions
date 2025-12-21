// import personsService from "../services/persons"

const listItem = ({ person, deleteEntry }) => {
    return (
        <>
            <p>{person.name} {person.number}</p >
            <button onClick={() => deleteEntry(person.id, person.name)}>delete</button>
        </>
    )
}

export default listItem;