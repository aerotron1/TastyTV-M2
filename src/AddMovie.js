import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function AddMovie(props) {
    return (
        <div>
            <Image src="https://hub.dummyapis.com/Image?text=Item&height=120&width=120" roundedCircle />
            <h2 style={{ color: props.addMovie.watched ? "green" : "grey" }}>Name: {props.addMovie.name}</h2>
            <h3 style={{ color: props.addMovie.watched ? "green" : "grey" }}>Release: {props.addMovie.release}</h3>
            <Button variant="outline-success" onClick={() => props.watchedMovie(props.addMovie.name)}>Watched</Button>{' '}
            <Button variant="outline-warning" onClick={() => props.removeMovie(props.addMovie)}>Remove</Button>{' '}
            <div contenteditable="true"><Button variant="outline-danger" onClick={() => props.watchedMovie(props.addMovie)}>Edit</Button>{' '}</div>
        </div>
    )
}

export default AddMovie