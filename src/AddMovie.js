import Button from 'react-bootstrap/Button'

function AddMovie(props) {
    return (
        <div>
            <h2 style={{color: props.add.watched ? "green" : "red"}}>{props.add.name + " " + props.add.release}</h2>
            <Button variant="outline-success" class="text-decoration-line-through" onClick={() => props.watchedMovie(props.add.name)}>Watched</Button>{' '}
            <p class="text-decoration-line-through">This text has a line going through it.</p>
            <Button variant="outline-warning" onClick={() => props.removeMovie(props.add)}>Remove</Button>{' '}
            <div contenteditable="true"><Button variant="outline-danger" onClick={() => props.watchedMovie(props.add.name)}>Edit</Button>{' '}</div>
        </div>
    )
}

export default AddMovie