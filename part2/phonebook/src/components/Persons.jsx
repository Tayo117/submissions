import ListItem from "./ListItem";

const Persons = ({ peopleToShow, deleteEntry }) => {

    return (
        <>
            <ul>
                {peopleToShow.map(person =>
                    <ListItem key={person.name} person={person} deleteEntry={deleteEntry} />
                )}
            </ul>
        </>
    )
}

export default Persons;