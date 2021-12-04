import Button from 'react-bootstrap/Button'

function AddMovie(props) {
    return (
        <div>
            <h2 style={{color: props.add.watched ? "green" : "grey"}}>{props.add.name + " " + props.add.release}</h2>
            <Button variant="outline-success" onClick={() => props.watchedMovie(props.add.name)}>Watched</Button>{' '}
            <Button variant="outline-warning" onClick={() => props.removeMovie(props.add)}>Remove</Button>{' '}
            <div contenteditable="true"><Button variant="outline-danger" onClick={() => props.watchedMovie(props.add.name)}>Edit</Button>{' '}</div>
        </div>
    )
}

export default AddMovie