import Button from 'react-bootstrap/Button'

function AddMovie(props) {
    return (
        <div>
            <h2 style={{ color: props.addMovie.watched ? "green" : "grey" }}>Name: {props.addMovie.name}</h2>
            <h3 style={{ color: props.addMovie.watched ? "green" : "grey" }}>Release: {props.addMovie.release}</h3>
            <Button variant="outline-success" onClick={() => props.watchedMovie(props.addMovie.name)}>Watched</Button>{' '}
            <Button variant="outline-warning" onClick={() => props.removeMovie(props.addMovie)}>Remove</Button>{' '}
            <div contenteditable="true"><Button variant="outline-danger" onClick={() => props.watchedMovie(props.add.name)}>Edit</Button>{' '}</div>
        </div>
    )
}

export default AddMovie