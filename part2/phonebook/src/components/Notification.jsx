const Notification = ({ message }) => {
    console.log(message, "ITS NO SACRIFICE")
    if (message === null) {
        return null
    }

    return (
        <div className="success">
            {message}
        </div>
    )
}

export default Notification